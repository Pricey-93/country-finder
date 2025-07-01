import { fetchAllCountryOverviews } from '../src/api/requests';
import { Country } from '../src/api/types';

  describe('Countries API', () => {
    it("should call the API", async () => {
      const fetchCountries = vi.fn(() => fetchAllCountryOverviews());
      const response: Country[] = await fetchCountries(); 
      expect(fetchCountries).toHaveBeenCalled();
      expect(response.length).toEqual(250);
    });
    it("should respond with an array of length 250", async () => {
      const fetchCountries = vi.fn(() => fetchAllCountryOverviews());
      const response: Country[] = await fetchCountries(); 
      expect(response.length).toEqual(250);
    });
  });
