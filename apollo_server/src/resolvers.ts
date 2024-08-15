import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
export const resolvers = {
  Query: {
    getAccounts: async (_, { page, pageSize }) => {
      try {
        const result = await prisma.accounts_created.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize
        });
        return result;
      } catch (error) {
        console.error("Error fetching accounts:", error);
        throw new Error("Failed to fetch accounts");
      }
    },
    getAccountByGuardian: async (_, { guardianAddress }, { prisma }) => {
      try {
        const result = await prisma.accounts_created.findFirst({
          where: { guardian: guardianAddress }
        });
        return result;
      } catch (error) {
        console.error("Error fetching account by guardian:", error);
        throw new Error("Failed to fetch account by guardian");
      }
    },
    getAccountByAddress: async (_, { ownerAddress }, { prisma }) => {
      try {
        const result = await prisma.accounts_created.findFirst({
          where: { account: ownerAddress }
        });
        return result;
      } catch (error) {
        console.error("Error fetching account by owner address:", error);
        throw new Error("Failed to fetch account by owner address");
      }
    }
  }
};
