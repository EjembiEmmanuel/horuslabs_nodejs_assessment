# Node.js Developer Hiring Assessment

## Overview

This repository contains the solution for the Node.js Developer Hiring Assessment. The project involves developing a blockchain indexer that listens to events on the Starknet network, stores the data in a database, and exposes it via a GraphQL API.

### Tools
1. [Node.js](https://nodejs.org/en)
2. [Apibara](https://www.apibara.com/)
3. [Postgres](https://www.postgresql.org/)
4. [Prisma ORM](https://www.prisma.io/)
5. [Apollo Server](https://www.apollographql.com/)

## Completed Tasks

1. **Blockchain Event Listener**

    - **Implemented Listener**: Created a blockchain event listener that subscribes to the AccountCreated event emitted when Argent Smart Accounts are created on the Starknet network.

    - **Captured Data:** Extracted relevant details from the event, including the owner and guardian addresses.

2. **Data Indexing**

    - **Database Storage:** Stored the captured event data in a PostgreSQL database. The schema was designed to efficiently handle and retrieve this data.

3. **GraphQL API**

    - **GraphQL Server Setup:** Set up a GraphQL server using Apollo Server.
    - **Schema Definition:** Defined the GraphQL schema with the following operations:
        - **Queries:**
            - **`getAccounts`:** Retrieves a list of indexed events with pagination support
            - **`getAccountByGuardian`:** Fetches a specific event by the guardian address.
            - **`getAccountByAddress`:**  Fetches a specific event by the owner address.
        - **Resolovers:** Implemented resolvers for the defined queries to interact with the PostgreSQL database and fetch the required data.

4. **Testing**

    - **Testing**: WIP



## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/EjembiEmmanuel/horuslabs_nodejs_assessment.git
cd horuslabs_nodejs_assessment
```

2. Build and run docker containers

```bash
docker-compose up --build
```

3. Open `localhost:4000` and run some queries

```Graphql
query ExampleQuery($limit: Int) {
  getAccounts(limit: $limit) {
    account
    guardian
  }
}

# Variables
{
  "limit": 5
}
```