import { useEffect, useRef, useState } from "react";
import { ICountry } from "../ICountry";
import fetchAllCountries from "./api/countries";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  const countries = useRef<null | ICountry[]>(null);
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
        ? <Home countries={ countries.current } />
        :
        null
      }
    </>
  )
}

export default App;
