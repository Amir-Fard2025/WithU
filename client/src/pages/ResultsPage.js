import Container from "../components/Pagination/Container"
import BasicModal from "../components/Modals/Modal"
import { useParams } from "react-router-dom";

export default function ResultsPage() {
  const {tags} = useParams();
  return (
    <div>
      <Container tags={tags} />
      <BasicModal/> 
    </div>
  );
}
