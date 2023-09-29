import { useEffect, useState } from "react";
import { ICountry } from "../ICountry";
import fetchAllCountries from "./api/countries";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  const [countries, setCountries] = useState<ICountry[]>();
  
  useEffect(() => {
    (async() => {
      const stored = localStorage.getItem("countries");
      if (stored) {
        setCountries(JSON.parse(stored));
      }
      else {
        const countryData = await fetchAllCountries();
        if (countryData) {
          localStorage.setItem("countries", JSON.stringify(countryData));
          setCountries(countryData);
        }
      }
    })();
  }, [])

  useEffect(() => {
    if (countries) {
      console.log(countries);
    }
  }, [countries])

  return (
    <>
      <Header />
      {
        countries 
        ? <Home countries={ countries } />
        :
        null
      }
    </>
  )
}

export default App;
