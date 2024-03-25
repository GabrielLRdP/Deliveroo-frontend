import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [response, setResponse] = useEffect();

  const fetchData = async () => {
    setResponse(
      await axios.get("https://site--deliveroo-backend--n5fkvp4ymxn4.code.run/")
    );

    fetchData();
  };
  return <>{response ? response : "chargement"}</>;
}

export default App;
