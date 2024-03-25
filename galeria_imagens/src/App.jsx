import FotoAmpliada from "./Components/FotoAmpliada";
import FotoList from "./Components/Fotolist";
import SearchBar from "./Components/SearchBar";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <SearchBar />
      <FotoList />
      <FotoAmpliada />
    </>
  );
}

export default App;
