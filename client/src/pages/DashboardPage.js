import Container from "../components/Pagination/Container"
import BasicModal from "../components/Modals/Modal"
import { GET_ALL_CARDS, GET_CREATED_CARDS_BY_USER_ID } from "../utils/queries";

export default function DashboardPage() {
  const dataParameter = "resourcesCards";

  return (
    <div>
      <Container
        query={GET_ALL_CARDS}
        dataParameter={dataParameter}
      />
      <BasicModal />
    </div>
  );
}
