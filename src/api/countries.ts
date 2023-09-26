//https://restcountries.com/v3.1/all
//https://restcountries.com/#api-endpoints-using-this-project

export default async function fetchAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}