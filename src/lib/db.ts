import { MongoClient } from "mongodb";

export default async function main() {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    return console.error("something went wrong");
  }
  const client = new MongoClient(uri);
  console.log(uri);
  try {
    await client.connect();
    console.log("connect to db");
    await listDatabases(client);
  } catch (e) {
    console.error(e, "failed to connect to the database");
  } finally {
    await client.close();
  }
}

async function listDatabases(client: MongoClient) {
  const databaseList = await client.db().admin().listDatabases();

  console.log("Databases.");
  databaseList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });
}
