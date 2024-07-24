import { faker } from "@faker-js/faker";

export interface IArticleFake {
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

export const articleFakeData: IArticleFake[] = [
  {
    id: 1,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 1 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 1,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },

  {
    id: 2,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 2 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 2,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },
  {
    id: 3,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 3 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 1,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },
  {
    id: 4,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 4 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 2,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },
  {
    id: 5,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 5 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 3,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },
  {
    id: 6,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 6 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 1,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },
  {
    id: 7,
    title: faker.lorem.words({ min: 6, max: 10 }),
    text: "this is sample 7 text",
    tags: [faker.lorem.word(), faker.lorem.word()],
    imageUrl: faker.image.url(),
    author: {
      Author_id: 1,
      authorName: faker.person.fullName(),
      authorAvatar: faker.image.avatar(),
    },
    link: "testLink",
    createdAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    updatedAt: faker.date.anytime().toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    isPublished: false,
  },
];
const randomName = faker.person.fullName();
const randomTitle = faker.lorem.words({ min: 6, max: 10 });
const randomAvatar = faker.image.avatar();
const randomImage = faker.image.url();
const randomWord1 = faker.lorem.word();
const randomWord2 = faker.lorem.word();
const randomAnytime = faker.date.anytime();
const randomWords = [randomWord1, randomWord2];
const data = {
  randomName,
  randomTitle,
  randomAvatar,
  randomImage,
  randomWords,
  randomAnytime,
};
