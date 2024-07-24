interface ITempData {
  randomName: string;
  randomTitle: string;
  randomAvatar: string;
  randomImage: string;
  randomWord: string;
}
export const ArticleCard = ({ data }: { data: ITempData }) => {
  const { randomName, randomTitle, randomAvatar, randomImage, randomWord } =
    data;
  return (
    <>
      <div className="cardWrapper w-72 h-96 border-2 bg-warning rounded-lg">
        <div className="h-2/5 w-full mb-2">
          <img
            src={randomImage}
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="text font-montserrat h-1/6 flex items-center gap-3 mx-2">
          <img src={randomAvatar} className="w-8 h-8 rounded-full" />
          <span className="name">{randomName}</span>
        </div>
        <div className="title mx-2">{randomTitle}</div>
      </div>
      <div className="wrapper w-72 h-96 border-2 bg-warning">{randomName}</div>
      <div className="wrapper w-72 h-96 border-2 bg-warning">{randomTitle}</div>
      <div className="wrapper w-72 h-96 border-2 bg-warning"></div>
      <div className="wrapper w-72 h-96 border-2 bg-warning"></div>
      <div className="wrapper w-72 h-96 border-2 bg-warning">{randomWord}</div>
      <div className="wrapper w-72 h-96 border-2 bg-warning">{randomName}</div>
      <div className="wrapper w-72 h-96 border-2 bg-warning">{randomName}</div>
    </>
  );
};
