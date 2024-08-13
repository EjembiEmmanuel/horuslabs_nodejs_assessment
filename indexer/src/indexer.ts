import type { Block } from "https://esm.sh/@apibara/indexer@0.3.1/starknet";

export const config = {
  streamUrl: Deno.env.get("APIBARA_STREAM_URL"),
  startingBlock: 650000,
  network: "starknet",
  finality: "DATA_STATUS_ACCEPTED",
  filter: {
    header: {
      weak: true
    },
    events: [
      {
        keys: [
          "0x010c19bef19acd19b2c9f4caa40fd47c9fbe1d9f91324d44dcd36be2dae96784"
        ],
        includeReceipt: false
      }
    ]
  },
  sinkType: "postgres",
  sinkOptions: {
    connectionString: Deno.env.get("DATABASE_CONN_STRING"),
    tableName: "accounts_created"
  }
};

export default function transform({ header, events }: Block) {
  const { blockNumber, blockHash, timestamp } = header!;

  return (events ?? []).map(({ transaction, event }) => {
    if (!event.data) return null;

    const { hash, transactionIndex } = transaction.meta;

    const [account, key, guardian] = event.data;
    console.log(event.data);

    const id = `${hash}_${event.index ?? 0}`;

    return {
      id: id,
      network: "starknet-mainnet",
      block_hash: blockHash,
      block_number: +(blockNumber ?? 0),
      block_timestamp: timestamp,
      transaction_hash: hash,
      transaction_index: transactionIndex,
      account: account,
      key: key,
      guardian: guardian
    };
  });
}
