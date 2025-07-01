import CountryManager from "../src/api/countryHelpers";
import fetchAllCountries from "../src/api/requests";

const countries = await fetchAllCountries();
const countryManager = new CountryManager(countries);
const getCountriesSpy = vi.spyOn(countryManager, "getCountries");
const getCountryByNameSpy = vi.spyOn(countryManager, "getCountryByName");

describe("Country Manager", () => {
  it("should create a country manager", ()  => {
    expect(countryManager).toBeInstanceOf(CountryManager);
  });
  it("should return the list of countries", () => {
    expect(countryManager.getCountries()).toEqual(countries);
    expect(getCountriesSpy).toHaveBeenCalled();
    expect(getCountriesSpy).toHaveReturnedWith(countries);
  });
  it("should get the given country by name", () => {
    expect(countryManager.getCountryByName("United Kingdom")?.name.common).toBe("United Kingdom");
    expect(getCountryByNameSpy).toHaveBeenCalled();
  });
})