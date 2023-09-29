import { useEffect, useState } from "react";
import { ICountry } from "../ICountry";
import fetchAllCountries from "./api/countries";
import Header from "./components/header/Header";
import CountryDetails from "./pages/countryDetails/CountryDetails";
import Home from "./pages/home/Home";

function App() {
  const [countries, setCountries] = useState<ICountry[]>();
  const [activeCountry, setActiveCountry] = useState<null | ICountry>(null);
  
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

  function activeCountryHandler(country: ICountry): void {
    setActiveCountry(country);
  }

  function removeCountryHandler(): void {
    setActiveCountry(null);
  }

  return (
    <>
      <Header />
      {
        activeCountry
        ? <CountryDetails 
            activeCountry={ activeCountry }
            removeCountryHandler={ removeCountryHandler }
            activeCountryHandler={ activeCountryHandler }
          />
        :
        countries 
        ? <Home countries={ countries } activeCountryHandler={ activeCountryHandler } />
        :
        null
      }
    </>
  )
}

export default App;
