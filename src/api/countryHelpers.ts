import { Country, Translation } from "./types";

export function extractNameKeys(activeCountry: Country | undefined): Translation[] {
  return Object.values(activeCountry?.name.nativeName || {});
}

export function extractCurrencies(activeCountry: Country | undefined) {
  return Object.values(activeCountry?.currencies || {}).map(currency => `(${currency.symbol}) ${currency.name}`);
}

export function extractLanguages(activeCountry: Country): string[] | undefined {
  if (activeCountry?.languages) {
    return Object.values(activeCountry.languages);
  }
  else {
    return undefined;
  }
}
