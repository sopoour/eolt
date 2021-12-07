import { useParams } from "react-router-dom";
import Section from "../components/UI/Section/Section";

const ContentDetail = (props) => {
  const params = useParams();

  const { contentId } = params;

  const contentItem = props.data.filter((item) => {
    return item.id === contentId;
  });

  console.log(contentItem);

  return (
    <Section>
      <h1>{contentItem[0].title}</h1>
      <p>{contentItem[0].preview}</p>
    </Section>
  );
};

export default ContentDetail;
