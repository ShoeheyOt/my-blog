import { ArticleCard } from "@/features/ArticleCard";
import { faker } from "@faker-js/faker";
import { articleFakeData } from "../../../public/articleFakeData";

export const Articles = () => {
  const randomName = faker.person.fullName();
  const randomTitle = faker.lorem.words({ min: 6, max: 10 });
  const randomAvatar = faker.image.avatar();
  const randomImage = faker.image.url();
  const randomWord1 = faker.lorem.word();
  const randomWord2 = faker.lorem.word();
  const randomAnytime = faker.date.anytime();
  const testDate = faker.date.anytime().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const randomWords = [randomWord1, randomWord2];
  console.log(testDate);
  const data = {
    randomName,
    randomTitle,
    randomAvatar,
    randomImage,
    randomWords,
    randomAnytime,
  };
  const fakeData = articleFakeData;
  return (
    <div className="wrapper ml-auto border-2 w-5/6 bg-primary min-h-[calc(100vh-6rem)]">
      <article className="flex flex-wrap h-full">
        {fakeData.map((data, i) => (
          <ArticleCard key={i} data={data} />
        ))}
      </article>
    </div>
  );
};
