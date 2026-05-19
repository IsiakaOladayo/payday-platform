from flask import Flask, jsonify, request
import psycopg2, os, logging
from prometheus_flask_exporter import PrometheusMetrics
 
app = Flask(__name__)
metrics = PrometheusMetrics(app)
logging.basicConfig(level=logging.INFO)
 
DB_HOST = os.environ.get("DB_HOST", "postgres")
DB_NAME = os.environ.get("DB_NAME", "payday")
DB_USER = os.environ.get("DB_USER", "payday")
DB_PASS = os.environ.get("DB_PASS", "secret")
 
def get_db():
    return psycopg2.connect(host=DB_HOST, dbname=DB_NAME, user=DB_USER, password=DB_PASS)
 
@app.route("/health")
def health():
    return jsonify({"status": "ok", "version": os.environ.get("APP_VERSION", "1.0.0")})
 
@app.route("/payments", methods=["GET"])
def list_payments():
    try:
        conn = get_db()
        cur  = conn.cursor()
        cur.execute("SELECT id, amount, currency, status, created_at "
                    "FROM payments ORDER BY created_at DESC LIMIT 20")
        rows = cur.fetchall()
        return jsonify([{"id":r[0],"amount":float(r[1]),"currency":r[2],
                         "status":r[3],"created_at":str(r[4])} for r in rows])
    except Exception as e:
        app.logger.error(f"DB error: {e}")
        return jsonify({"error": "database unavailable"}), 503
 
@app.route("/payments", methods=["POST"])
def create_payment():
    data = request.get_json(force=True)
    try:
        conn = get_db()
        cur  = conn.cursor()
        cur.execute("INSERT INTO payments (amount, currency, status) "
                    "VALUES (%s, %s, %s) RETURNING id",
                    (data["amount"], data.get("currency","NGN"), "pending"))
        pid = cur.fetchone()[0]
        conn.commit()
        app.logger.info(f"Payment created: {pid}")
        return jsonify({"id": pid, "status": "pending"}), 201
    except Exception as e:
        app.logger.error(f"Error: {e}")
        return jsonify({"error": str(e)}), 500
 
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
