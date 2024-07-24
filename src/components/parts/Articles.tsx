import { ArticleCard } from "@/features/ArticleCard";
import { faker } from "@faker-js/faker";

export const Articles = () => {
  const randomName = faker.person.fullName();
  const randomTitle = faker.lorem.words({ min: 3, max: 10 });
  const randomAvatar = faker.image.avatar();
  const randomImage = faker.image.url();
  const randomWord = faker.lorem.word();
  const data = {
    randomName,
    randomTitle,
    randomAvatar,
    randomImage,
    randomWord,
  };
  return (
    <div className="wrapper ml-auto border-2 w-5/6 bg-primary min-h-[calc(100vh-6rem)]">
      <article className="flex flex-wrap h-full">
        <ArticleCard data={data} />
      </article>
    </div>
  );
};
