import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
const uri = process.env.MONGODB_URL;
const DB = process.env.MONGODB_DB_NAME;
const COLLECTION = process.env.MONGODB_COLLECTION_ARTICLES;
const client = new MongoClient(uri!);

export async function main() {
  if (!uri) {
    return console.error("something went wrong.");
  }

  try {
    await client.connect();
  } catch (error) {
    return Error("failed to connect to server");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const lists = await listDatabases(client);
    return NextResponse.json({ message: "success", lists }, { status: 200 });
  } catch (error) {
    Error("failed to get the data");
  } finally {
    await client.close();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await main();
    console.log("collection", COLLECTION);
    console.log("DB", DB);

    const { inputTitle, inputText }: { inputTitle: string; inputText: string } =
      await req.json();
    const data = await client
      .db(DB)
      .collection(COLLECTION!)
      .insertOne({ inputTitle, inputText });

    return NextResponse.json({ message: "success", data }, { status: 201 });
  } catch (error) {
    Error("failed to post the data");
  } finally {
    await client.close();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    await main();
  } catch (error) {
    Error("failed to Delete the data");
  } finally {
    await client.close();
  }
};

const listDatabases = async (client: MongoClient) => {
  const databasesList = await client.db().admin().listDatabases();
  return databasesList;
};
