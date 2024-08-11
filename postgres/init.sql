CREATE TABLE accounts_created (
    _cursor bigint,
    network VARCHAR(50),
    block_hash VARCHAR(66),
    block_number INTEGER,
    block_timestamp TIMESTAMP,
    transaction_hash VARCHAR(66),
    transaction_index INTEGER,
    account VARCHAR(66),
    key VARCHAR(66),
    guardian VARCHAR(66)
);
