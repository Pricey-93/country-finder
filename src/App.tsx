import { useEffect, useRef, useState } from "react";
import fetchAllCountries from "./api/countries";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  const countries = useRef(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    (async() => {
      const stored = localStorage.getItem("countries");
      if (stored) {
        countries.current = JSON.parse(stored);
        setDataLoaded(true);
      }
      else {
        const countryData = await fetchAllCountries();
        if (countryData) {
          localStorage.setItem("countries", JSON.stringify(countryData));
          countries.current = countryData;
          setDataLoaded(true);
        }
      }
    })();
  }, [])

  useEffect(() => {
    if (dataLoaded) {
      console.log(countries.current);
    }
  }, [dataLoaded])

  return (
    <>
      <Header />
      {
        dataLoaded 
        ? <Home countries={countries} />
        :
        null
      }
    </>
  )
}

export default App;
