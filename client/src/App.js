import React from "react";
import "./App.js";
import SearchBar from "./components/SearchBar/searchBar";
import Tags from "./components/Tags/Tags";
import PlusButton from "./components/Button/PlusButton";
import Text from "./components/TextContent/TextContent";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "linear-gradient(#4285f49f, #ffff00b3)",
        height: "100vh",
      }}
      // style={{
      //   background: "linear-gradient(90deg, blue 50%, yellow 50%)",
      //   height: "180vh",
      // }}
    >
      <SearchBar />
      <Tags />
      <PlusButton />
      <Text />
    </div>
  );
}

export default App;
