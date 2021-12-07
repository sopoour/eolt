import { useParams } from "react-router-dom";

const ContentDetail = () => {
    const params = useParams();

    return(
        <h1>This is a detail page for {params.contentId}</h1>
    )
};

export default ContentDetail;