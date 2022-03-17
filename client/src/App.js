import React from "react";
import "./App.js";
import SearchBar from "./components/SearchBar/searchBar";
import Tags from "./components/Tags/Tags";
import PlusButton from "./components/Button/PlusButton";
import Text from "./components/TextContent";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Tags />
      <PlusButton />
      <Text />
    </div>
  );
}

export default App;
