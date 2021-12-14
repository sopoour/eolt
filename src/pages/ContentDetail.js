import { useParams } from "react-router-dom";
import Section from "../components/UI/Section/Section";
import { useSingleArticle } from "../hooks/useSingleArticle";
import Markdown from "react-markdown";

const ContentDetail = () => {
  const { contentId } = useParams();
  const [article, isLoading] = useSingleArticle(contentId);

  if (isLoading) return <p>Loading...</p>

  return (
    <Section>
      <h1>{article.mainTitle}</h1>
      <h3 style={{fontStyle: "italic"}}> {article.subtitle}</h3>
      <Markdown children={article.abstract} />
      <Markdown children={article.mainContent} />
      <Markdown children={article.bibliography} />
      <Markdown children={article.authorInfo} />
    </Section>
  );
};

export default ContentDetail;
