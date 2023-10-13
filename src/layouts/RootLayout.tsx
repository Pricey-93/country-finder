import Header from "../components/header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import fetchAllCountries from "../api/countries";
import { ICountry } from "../api/ICountry";

export default function RootLayout() {
  const countries: ICountry[] = useLoaderData() as ICountry[];
  console.log(countries);

//Make a bunch of methods like getCountries, searchCountries,
// and pass them down as an API for children elements to work with.

function getCountries() {return countries}

function searchByName(userInput: string): ICountry[] {
  const searchResult = countries?.filter(country => country.name.common.toUpperCase().includes(userInput.toUpperCase()));
  return searchResult;
}

  return (
    <>
      <Header />
      <main>
        <Outlet context={[getCountries, searchByName]}/>
      </main>
    </>
  )

}

export async function loader(): Promise<ICountry[]> {
  const stored = localStorage.getItem("countries");
  if (stored) {
    return JSON.parse(stored);
  }
  else {
    const countries = await fetchAllCountries();
    if (countries) {
      localStorage.setItem("countries", JSON.stringify(countries));
    }
    return countries;
  }
}