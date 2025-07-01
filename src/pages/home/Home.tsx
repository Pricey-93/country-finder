import { useState } from "react";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import RegionFilter from "../../components/ui/regionFilter/RegionFilter";
import Card from "../../components/card/Card";
import { useLoaderData } from "react-router";
import { Country } from "../../api/types";

export default function Home() {
  const countries = useLoaderData<Country[]>();

  const [filteredCountries, setFilteredCountries] = useState(countries);

  function filterCountries(region: string): void {
    if (region === "Filter by Region") {
      setFilteredCountries(countries);
    }
    else {
      setFilteredCountries(countries.filter(country => country.region === region));
    }
  }

  function searchCountries(query: string): void {
    const searchResult = countries?.filter(country => country.name.common.toUpperCase().includes(query.toUpperCase()));
    if (searchResult?.length > 0) {
      setFilteredCountries(searchResult);
    }
  }

  return ( 
    <main className="home-container">
      <div className="controls-wrapper">
        <SearchInput searchCountries={ searchCountries } />
        <RegionFilter filterCountries={ filterCountries } />
      </div>
      <div className="cards-wrapper">
      {
        filteredCountries?.map((country, i) => <Card country={ country } key={ i } />)
      }
      </div>
    </main>
  )
}