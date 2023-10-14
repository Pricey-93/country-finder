import { ICountry } from "./ICountry";

export default class CountryManager {
  private countries: ICountry[];

  constructor(countries: ICountry[]) {
    this.countries = countries;
  }
  getCountries(): ICountry[] {return this.countries};

  getCountryByName(name: string): ICountry | null {
    const country = this.countries.find(country => country.name.common.toLowerCase() === name.toLowerCase());
    if (country) {
      return country
    }
    else return null; 
  }

  searchByName(userInput: string): ICountry[] {
    const searchResult = this.countries.filter(country => country.name.common.toLowerCase().includes(userInput.toLowerCase()));
    return searchResult;
  }
}