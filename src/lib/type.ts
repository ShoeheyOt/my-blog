export interface IAuthor {
  Author_id: number;
  authorName: string;
  authorAvatar: string;
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
