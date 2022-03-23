import PageContainer from '../components/Pagination/PageContainer'
import BasicModal from '../components/Modals/Modal'
import { useParams } from "react-router";
import { GET_PUBLISHED_CARDS_BY_TAG } from "../utils/queries";


export default function ResultsPage() {
  const { tags } = useParams();

  return (
    <>
      <PageContainer tags={tags} query={GET_PUBLISHED_CARDS_BY_TAG} />
      <BasicModal />
    </>
  );
}