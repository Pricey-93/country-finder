import "./Home.css";
import { useState } from "react";
import { ICountry } from "../../../ICountry";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import RegionFilter from "../../components/ui/regionFilter/RegionFilter";
import Card from "../../components/card/Card";

interface IProps {
  countries: null | ICountry[]
}
export default function Home(props: IProps) {
  const { countries } = props;
  const [filteredCountries, setFilteredCountries] = useState(countries);
  
  function filterCountries(region: string):void {
    if (region === "Filter by Region") {
      setFilteredCountries(countries);
    }
    else {
      const filtered = countries.filter(country => country.region === region);
    setFilteredCountries(filtered);
    }
  }

  function searchCountries(name: string):void {
    const searchResult = countries?.filter(country => country.name.common.toUpperCase() === name.toUpperCase());
    if (searchResult?.length > 0) {
      setFilteredCountries(searchResult);
    }
  }

  return (
    <main className="home-container">
      <div className="controls-wrapper">
        <SearchInput searchCountries={ searchCountries }/>
        <RegionFilter filterCountries={ filterCountries }/>
      </div>
      <div className="cards-wrapper">
      {
        filteredCountries?.map((country, i) => <Card country={country} key={i} />)
      }
      </div>
    </main>
  )
}