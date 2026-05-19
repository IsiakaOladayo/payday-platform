import psycopg2, os, time, logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
 
DB_HOST = os.environ.get("DB_HOST","postgres")
DB_NAME = os.environ.get("DB_NAME","payday")
DB_USER = os.environ.get("DB_USER","payday")
DB_PASS = os.environ.get("DB_PASS","secret")
 
def process_pending():
    try:
        conn = psycopg2.connect(host=DB_HOST,dbname=DB_NAME,user=DB_USER,password=DB_PASS)
        cur  = conn.cursor()
        cur.execute("SELECT id FROM payments WHERE status='pending' LIMIT 10")
        for row in cur.fetchall():
            time.sleep(0.1)
            cur.execute("UPDATE payments SET status='completed' WHERE id=%s",(row[0],))
            logger.info(f"Processed payment {row[0]}")
        conn.commit(); conn.close()
    except Exception as e:
        logger.error(f"Worker error: {e}")
 
if __name__ == "__main__":
    logger.info("Worker started")
    while True:
        process_pending()
        time.sleep(10)
