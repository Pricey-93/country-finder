import { useEffect, useState } from "react";
import { ICountry } from "../ICountry";
import fetchAllCountries from "./api/countries";
import Header from "./components/header/Header";
import CountryDetails from "./pages/countryDetails/CountryDetails";
import Home from "./pages/home/Home";

function App() {
  const [countries, setCountries] = useState<ICountry[]>();
  const [activeCountry, setActiveCountry] = useState<null | ICountry>(null);
  const [borderCountries, setBorderCountries] = useState<null | ICountry[]>(null);
  
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

  function changeActiveCountry(country: ICountry): void {
    setActiveCountry(country);
    changeBorderCountries(country);
  }

  function changeBorderCountries(country: ICountry): void {
    const borders = country.borders;
    const currentBorderCountries: ICountry[] = [];

    borders?.forEach(border => {
      const match = countries?.find(country => country.cca3 === border);
      if (match) {
        currentBorderCountries.push(match);
      }
    });

    setBorderCountries(currentBorderCountries);
  }

  function resetCountry(): void {
    setActiveCountry(null);
  }

  return (
    <>
      <Header />
      {
        activeCountry
        ? <CountryDetails 
            activeCountry={ activeCountry }
            backButtonHandler={ resetCountry }
            borderClickHandler={ changeActiveCountry }
            activeBorderCountries={ borderCountries }
          />
        :
        countries 
        ? <Home countries={ countries } countryClickHandler={ changeActiveCountry } />
        :
        null
      }
    </>
  )
}

export default App;
