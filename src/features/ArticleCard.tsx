import { IArticleFake } from "../../public/articleFakeData";

export const ArticleCard = ({ data }: { data: IArticleFake }) => {
  const { id, title, tags, imageUrl, author, createdAt } = data;

  return (
    <>
      <div className="cardWrapper w-96 h-[28rem] border-2 bg-warning rounded-lg">
        <div className="h-2/5 w-full mb-2">
          <img
            src={imageUrl}
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="articleWrapper h-3/5 mx-2 py-4 flex flex-col justify-between">
          <div className="mainCardWrapper flex flex-col gap-3">
            <div className="date text-D_notes font-extralight">{createdAt}</div>
            <div className="text font-montserrat h-1/6 flex items-center gap-3">
              <img src={author.authorAvatar} className="w-8 h-8 rounded-full" />
              <span className="name">{author.authorName}</span>
            </div>
            <div className="title text-D_text">{title}</div>
          </div>
          <div className="tagWrapper">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="tag text-D_notes text-opacity-80 px-2 py-1 mr-1 bg-secondary text-primary rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
