import { LoaderFunctionArgs } from "react-router";
import { fetchAllCountryOverviews, fetchCountryByName, fetchCountryNameByCca3 } from "./requests";
import { Country, CountryDetailsRecord } from "./types";

export async function countriesLoader(): Promise<Country[]> {
  const result = await fetchAllCountryOverviews();
  return result;
}

export async function countryLoader({ params }: LoaderFunctionArgs): Promise<CountryDetailsRecord> {
  const { name } = params;
  const details: CountryDetailsRecord = {};

  if (!name) throw new Error("Invalid parameters");

  const response = await fetchCountryByName(name);
  if (response) {
    const borderCodes = response[0].borders;
    details.country = response[0];
    if (borderCodes) {
      const borderCountries = await fetchCountryNameByCca3(borderCodes);
      details.borderCountries = borderCountries;
    }
  }
  return details;
}
