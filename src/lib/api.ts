import { ObjectId } from "mongodb";
import { INewOneArticle, IOneArticle } from "./type";

export const fetchAllBlogs = async (): Promise<IOneArticle[] | undefined> => {
  try {
    const result = await fetch("http://localhost:3000/api/blog", {
      method: "GET",
      cache: "no-cache",
    });

    const data = await result.json();

    return data.articles;
  } catch (error) {
    console.error("something went wrong", error);
  }
};

export const fetchOneArticle = async (articleId: string) => {
  try {
    const result = await fetch(`http://localhost:3000/api/blog/${articleId}`, {
      method: "GET",
      cache: "no-cache",
    });
    const data = await result.json();

    return data.article;
  } catch (error) {
    console.error("something went wrong", error);
  }
};

export const updateOneArticle = async (
  _id: string,
  title: string,
  text: string
) => {
  try {
    const result = await fetch(`http://localhost:3000/api/blog/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id, title, text }),
    });
    const data = await result.json();

    return data;
  } catch (error) {
    console.error("something went wrong", error);
  }
};

export const postOneArticle = async (title: string, text: string) => {
  const article: INewOneArticle = {
    title,
    text,
    createdAt: new Date(),
    isPublished: false,
  };

  try {
    const result = await fetch("http://localhost:3000/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });

    const data = await result.json();

    return data;
  } catch (error) {
    console.error("couldn't post an article", error);
  }
};
