import FotoAmpliada from "./Components/FotoAmpliada";
import SearchBar from "./Components/SearchBar";
import FotoList from "./Components/Fotolist";

import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);

  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 12,
      },
    });
    setFotos(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, []);

  return (
    <div className="container">
      <SearchBar />
      <FotoList fotos={fotos} />
      <FotoAmpliada />
    </div>
  );
}

export default App;
