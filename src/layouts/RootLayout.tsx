import { useState } from "react";
import { Outlet, useOutletContext, useLoaderData } from "react-router-dom";
import Header from "../components/header/Header";
import { ICountry } from "../api/ICountry";
import fetchAllCountries from "../api/countries";


type ContextType = {
  countries: ICountry[],
  getCountries: () => ICountry[],
  searchByName: (userInput: string) => ICountry[],
  changeActiveCountry: (country: ICountry) => void
};

export default function RootLayout() {
  const countries: ICountry[] = useLoaderData() as ICountry[];
  const [activeCountry, setActiveCountry] = useState<null | ICountry>(null);
  const [borderCountries, setBorderCountries] = useState<null | ICountry[]>(null);

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


//Context methods
function getCountries(): ICountry[] {return countries}

function searchByName(userInput: string): ICountry[] {
  const searchResult = countries?.filter(country => country.name.common.toUpperCase().includes(userInput.toUpperCase()));
  return searchResult;
}

  return (
    <>
      <Header />
      <main>
        <Outlet context={{countries, getCountries, searchByName, changeActiveCountry} satisfies ContextType}/>
      </main>
    </>
  )

  // {/* <CountryDetails 
//             activeCountry={ activeCountry }
//             backButtonHandler={ resetCountry }
//             borderClickHandler={ changeActiveCountry }
//             activeBorderCountries={ borderCountries }
//           /> */}

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

export function useContext() {
  return useOutletContext<ContextType>();
}