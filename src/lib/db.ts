import { MongoClient } from "mongodb";

export default async function main(
  callback: <Type>(client: MongoClient) => Promise<Type>
) {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    return console.error("something went wrong");
  }
  const client = new MongoClient(uri);
  console.log(uri);

  try {
    await client.connect();

    console.log("connect to db");

    const res = callback(client);

    return res;
  } catch (e) {
    console.error(e, "failed to connect to the database");
  } finally {
  }
}
