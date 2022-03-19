import React from "react";
import "./App.js";
import SearchBar from "./components/SearchBar/searchBar";
import Tags from "./components/Tags/Tags";
import Text from "./components/TextContent/TextContent";
import Modal from "./components/Modals/Modal";
import Footer from "./components/Footer/Footer";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "linear-gradient(#4285f49f, #ffff00b3)",
        height: "100vh",
        width: "auto",
      }}
      // style={{
      //   background: "linear-gradient(90deg, blue 50%, yellow 50%)",
      //   height: "180vh",
      // }}
    >
      <ResponsiveNavbar />
      <SearchBar />
      <Tags />
      <Text />
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
