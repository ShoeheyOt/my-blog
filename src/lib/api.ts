import { IOneArticle } from "./type";

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
