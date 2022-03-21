import SearchBar from "../components/SearchBar/searchBar";
import Tags from "../components/Tags/Tags";
import Text from "../components/TextContent/TextContent";
import Modal from "../components/Modals/Modal";

export default function LandingPage() {
  return (
    <div
      className="landingpage-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "80vh",
      }}
    >
      <SearchBar />
      <Tags />
      <Text />
      <Modal />
    </div>
  );
}
