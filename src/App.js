import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import axios from "axios";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

function App() {
  const [evenData, setEvenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
      .then((response) => {
        const { events } = response.data;
        setEvenData(events);
        setIsLoading(false);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Header />
          <Map events={evenData} />
        </div>
      )}
    </>
  );
}

export default App;
