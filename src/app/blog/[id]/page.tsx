import { OnePage } from "@/components/pages/OnePage";
import { articleFakeData } from "../../../../public/articleFakeData";

export default function BlogOnePage({ params }: { params: { id: number } }) {
  const { id } = params;
  const articleFakeOneData = articleFakeData.filter((data) => data.id == id)[0];

  return <OnePage articleId={id} articleFakeOneData={articleFakeOneData} />;
}
