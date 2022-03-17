import React from "react";
import "./App.js";
import SearchBar from "./components/SearchBar/searchBar";
import Tags from "./components/Tags/Tags";
import PlusButton from "./components/Button/PlusButton";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Tags />
      <PlusButton />
    </div>
  );
}

export default App;
