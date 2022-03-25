import Container from "../components/Pagination/Container";
import BasicModal from "../components/Modals/Modal";
import { useParams } from "react-router-dom";
import { GET_PUBLISHED_CARDS_BY_ALL_TAGS } from "../utils/queries";

export default function ResultsPage() {
  const { tags } = useParams();
  const variables = { tagNamesArray: tags.split(".") };
  const dataParameter = "getPublishedCardsByAllTagNames";
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -30%)",
      }}
    >
      <Container
        variables={variables}
        query={GET_PUBLISHED_CARDS_BY_ALL_TAGS}
        dataParameter={dataParameter}
      />
      <BasicModal />
    </div>
  );
}
