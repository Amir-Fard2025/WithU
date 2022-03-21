import { Container } from "@mui/material";
import { useParams } from "react-router";
import { GET_PUBLISHED_CARDS_BY_TAG } from "../../utils/queries";

export default function ResultsPage() {
  const { tags } = useParams();

  return (
    <>
      <Container tags={tags} query={GET_PUBLISHED_CARDS_BY_TAG} status="published"/>
      <Modal />
    </>
  );
}
