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
    const articles = await client
      .db(DB)
      .collection(COLLECTION!)
      .find({})
      .toArray();

    return NextResponse.json({ message: "success", articles }, { status: 200 });
  } catch (error) {
    Error("failed to get the data");
  } finally {
    await client.close();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await main();

    const { inputTitle, inputText }: { inputTitle: string; inputText: string } =
      await req.json();

    const insertData = {
      title: inputTitle,
      text: inputText,
      createdAt: new Date(),
      isPublished: false,
    };

    const data = await client
      .db(DB)
      .collection(COLLECTION!)
      .insertOne(insertData);

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
