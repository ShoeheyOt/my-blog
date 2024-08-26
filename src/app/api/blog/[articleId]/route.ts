import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { main } from "../route";

const uri = process.env.MONGODB_URL;
const DB = process.env.MONGODB_DB_NAME;
const COLLECTION = process.env.MONGODB_COLLECTION_ARTICLES;
const client = new MongoClient(uri!);

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const request = req.url.split("/blog/")[1];
    const articleId = ObjectId.createFromHexString(request);
    await main();

    const article = await client
      .db(DB)
      .collection(COLLECTION!)
      .findOne({ _id: articleId });

    return NextResponse.json({ message: "success", article }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await client.close();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const { _id, text } = await req.json();
    //new ObjectId(_id) is deprecated
    const bId = ObjectId.createFromHexString(_id);

    await main();

    const result = await client
      .db(DB)
      .collection(COLLECTION!)
      .updateOne({ _id: bId }, [{ $set: { text: text } }]);

    return NextResponse.json({ message: "Success", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed", error }, { status: 500 });
  } finally {
    await client.close();
  }
};
