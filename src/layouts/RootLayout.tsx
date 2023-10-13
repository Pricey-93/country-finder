import { Outlet, useOutletContext, useLoaderData } from "react-router-dom";
import { ICountry } from "../api/ICountry";
import fetchAllCountries from "../api/countries";
import CountryManager from "../api/CountryManager";
import Header from "../components/header/Header";

type ContextType = {
  countryManager: CountryManager
};

export default function RootLayout() {
  const countryManager = new CountryManager(useLoaderData() as ICountry[]);

  // function changeActiveCountry(country: ICountry): void {
  //   setActiveCountry(country);
  //   changeBorderCountries(country);
  //   // const navigate = useNavigate();
  //   // navigate(`countries/${activeCountry?.name.common}`);
  // }

  // function changeBorderCountries(country: ICountry): void {
  //   const borders = country.borders;
  //   const currentBorderCountries: ICountry[] = [];

  //   borders?.forEach(border => {
  //     const match = countries?.find(country => country.cca3 === border);
  //     if (match) {
  //       currentBorderCountries.push(match);
  //     }
  //   });

  //   setBorderCountries(currentBorderCountries);
  // }

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ countryManager } satisfies ContextType}/>
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

export function useContext() {
  return useOutletContext<ContextType>();
}