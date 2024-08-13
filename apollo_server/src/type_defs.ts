export const typeDefs = `#graphql
  type AccountCreated {
    id: String
    cursor: Int
    network: String
    block_hash: String
    block_number: Int
    block_timestamp: String
    transaction_hash: String
    transaction_index: Int
    account: String
    key: String
    guardian: String
  }

  type Query {
    getAccounts(limit: Int, offset: Int): [AccountCreated]
    getAccountByGuardian(guardianAddress: String!): AccountCreated
    getAccountByAddress(ownerAddress: String!): AccountCreated
  }
`;
