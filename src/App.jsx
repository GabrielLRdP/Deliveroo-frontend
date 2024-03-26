import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--deliveroo-backend--n5fkvp4ymxn4.code.run/test"
      );

      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data ? (
        <main>
          <Presentation
            title={data.meta.restaurant.name}
            description={data.meta.metatags.descriptionSocial}
            imgSrc={data.meta.metatags.image}
          />

          <Main data={data} />
        </main>
      ) : (
        "chargement"
      )}
    </>
  );
}

export default App;
