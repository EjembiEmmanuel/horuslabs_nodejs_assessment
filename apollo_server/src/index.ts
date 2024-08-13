import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./type_defs.js";
import { resolvers, prisma } from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const context = async ({ req }) => ({
  prisma
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context
});

console.log(`🚀  Server ready at: ${url}`);
