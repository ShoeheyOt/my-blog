import { INewOneArticle } from "@/lib/type";
import { MongoClient, ObjectId } from "mongodb";
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

    const inputData: INewOneArticle = await req.json();

    const data = await client
      .db(DB)
      .collection(COLLECTION!)
      .insertOne(inputData);

    return NextResponse.json({ message: "success", data }, { status: 201 });
  } catch (error) {
    Error("failed to post the data", error!);
  } finally {
    await client.close();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const input = await req.json();
    const articleId = ObjectId.createFromHexString(input);
    const result = await client
      .db(DB)
      .collection(COLLECTION!)
      .deleteOne({ _id: articleId });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    Error("failed to Delete the data", error!);
  } finally {
    await client.close();
  }
};
