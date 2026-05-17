-- Create a dedicated payments table for the payday platform
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    transaction_id UUID DEFAULT gen_random_uuid() UNIQUE,
    account_number VARCHAR(20) NOT NULL,
    amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'processed', 'failed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index the transaction status for fast lookups
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);

-- Insert realistic seed records to populate the ledger for your live presentation demo
INSERT INTO payments (account_number, amount, status) VALUES
('1234567890', 1500.00, 'processed'),
('0987654321', 250.50, 'processed'),
('1122334455', 5000.00, 'pending')
ON CONFLICT DO NOTHING;
