import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { CountryDetailsRecord } from "../../api/types";
import BackButton from "../../components/ui/backButton/BackButton";
import BorderButton from "../../components/ui/borderButton/BorderButton";
import 
{ 
  extractCurrencies,
  extractLanguages,
} from "../../api/countryHelpers";

export default function CountryDetails() {
  const { country, borderCountries } = useLoaderData<CountryDetailsRecord>();

  useEffect(() => {
    if (country) {
      console.log(country);
    }
    if (country.currencies) {
      Object.entries(country.currencies).forEach(([code, currency]) => {
        console.log(`${code}: ${currency.symbol} ${currency.name}`);
      });
    }
    if (country.languages) {
      Object.values(country.languages).forEach(value => {
        console.log(value);
      });
    }
    if (borderCountries) {
      console.log(borderCountries);
    }
  })

  return (
    <div className="country-details-page-wrapper">
      <BackButton value="back" />
      <div className="country-details-wrapper">
        <img src={ country?.flags.png } alt={ country?.flags.alt } />
        <div className="country-details-container">
          <h2 className="country-title"> { country?.name.common } </h2>
          <div className="country-details-lists-wrapper">

            <dl className="country-details-list-left">

              <div className="country-details">
                <dt>Native Name</dt>
                <dd> {  } </dd>
              </div>

              <div className="country-details">
                <dt>Population</dt>
                <dd> { country?.population.toLocaleString() } </dd>
              </div>

              <div className="country-details">
                <dt>Region</dt>
                <dd> { country?.region } </dd>
              </div>

              <div className="country-details">
                <dt>Sub Region</dt>
                <dd> { country?.subregion } </dd>
              </div>

              <div className="country-details">
                <dt>Capital</dt>
                <dd> { country?.capital ? country.capital.join(", ") : null } </dd>
              </div>

            </dl>

            <dl className="country-details-list-right">

              <div className="country-details">
                <dt>Top Level Domain</dt>
                <dd> { country?.tld } </dd>
              </div>

              <div className="country-details">
                <dt>Currencies</dt>
                <dd> {extractCurrencies(country).join(", ")} </dd>
              </div>

              <div className="country-details">
                <dt>Languages</dt>
                <dd> { extractLanguages(country)?.join(", ") } </dd>
              </div>

            </dl>
          </div>
          <div className="border-countries-container">
            <h3>Border countries: </h3>
            <div className="border-country-buttons">
              {
                borderCountries ? borderCountries.map((borderCountry, i) => {
                return <BorderButton
                        countryName={ borderCountry.name.common }
                        key={ i }
                        />
              })
              :
              null
              }
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}