import { articleFakeData } from "../../../../public/articleFakeData";

export default function BlogOnePage({ params }: { params: { id: number } }) {
  const { id } = params;
  const articleFakeOneData = articleFakeData.filter((data) => data.id == id)[0];
  const {
    title,
    text,
    tags,
    imageUrl,
    createdAt,
    author: { authorName },
  } = articleFakeOneData;
  return (
    <div className="oneArticleWrapper mx-96 min-h-screen bg-primary">
      <div className="text-D_title font-thin">{title}</div>
      <div className="text-D_text font-thin text-center">{text}</div>
      <div className="imageWrapper flex justify-center">
        <img src={imageUrl} />
      </div>

      <div>{authorName}</div>
      <div className="tagsWrapper">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-D_notes border-2 border-secondary px-2 rounded-full mr-1"
          >
            # {tag}
          </span>
        ))}
      </div>
      <div>{createdAt}</div>
    </div>
  );
}
