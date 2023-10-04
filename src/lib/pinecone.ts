import { PineconeClient } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const client = new PineconeClient();

  await client.init({
    environment: "us-west4-gcp-free",
    apiKey: process.env.PINECONE_API_KEY!,
  });

  return client;
};
