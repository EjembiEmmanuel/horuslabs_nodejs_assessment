FROM quay.io/apibara/sink-postgres

WORKDIR /indexer
COPY ./indexer/src/indexer.ts .
COPY ./indexer/Dockerfile .

CMD ["run", "indexer.ts", "--allow-env-from-env", "APIBARA_STREAM_URL,DATABASE_CONN_STRING", "-A", "dna_iFXUvWUjXtS0GYbvEeiS"]