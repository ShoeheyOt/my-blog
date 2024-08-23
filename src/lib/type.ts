export interface IAuthor {
  Author_id: number;
  authorName: string;
  authorAvatar: string;
}

export interface IUser {
  id: string;
  name: string;
  password: string;
  clerkId: string;
}

export interface INewOneArticle {
  title: string;
  text: string;
  createdAt: string;
  isPublished: boolean;
}

export interface IOneArticle {
  _id: string;
  title: string;
  text: string;
  createdAt: string;
  isPublished: boolean;
}
export interface IArticleFakeOneData {
  id: number;
  title: string;
  text: string;
  tags: string[];
  imageUrl: string;
  author: { Author_id: number; authorName: string; authorAvatar: string };
  link: string;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
}
