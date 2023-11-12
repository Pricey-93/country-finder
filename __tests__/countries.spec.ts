import fetchAllCountries from '../src/api/countries';
import { ICountry } from '../src/api/ICountry';

  describe('Countries API', () => {
    it("should call the API", async () => {
      const fetchCountries = vi.fn(() => fetchAllCountries());
      const response: ICountry[] = await fetchCountries(); 
      expect(fetchCountries).toHaveBeenCalled();
      expect(response.length).toEqual(250);
    });
    it("should respond with an array of length 250", async () => {
      const fetchCountries = vi.fn(() => fetchAllCountries());
      const response: ICountry[] = await fetchCountries(); 
      expect(response.length).toEqual(250);
    });
  });
