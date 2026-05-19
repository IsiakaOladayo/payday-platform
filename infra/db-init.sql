CREATE TABLE IF NOT EXISTS payments (
  id         SERIAL PRIMARY KEY,
  amount     NUMERIC(12,2) NOT NULL,
  currency   VARCHAR(3)    DEFAULT 'NGN',
  status     VARCHAR(20)   DEFAULT 'pending',
  created_at TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO payments (amount, currency, status) VALUES
  (5000.00,'NGN','completed'),(12500.50,'USD','completed'),(750.00,'NGN','pending');
