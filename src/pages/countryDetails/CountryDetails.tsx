import { useEffect, useState } from "react";
import { useContext } from "../../layouts/RootLayout";
import { useParams, useNavigate } from "react-router-dom";
import { ICountry, Translation } from "../../api/ICountry";
import BackButton from "../../components/ui/backButton/BackButton";
import BorderButton from "../../components/ui/borderButton/BorderButton";

export default function CountryDetails() {
  const { countryManager } = useContext();
  const { name } = useParams();
  const navigate = useNavigate();

  const [activeCountry, setActiveCountry] = useState<null | ICountry>(null);
  const [borderCountries, setBorderCountries] = useState<null | ICountry[]>(null);
  const [commonNativeName, setCommonNativeName] = useState<string>("");
  const [languages, setLanguages] = useState<string>("");
  const [currencies, setCurrencies] = useState<string>("");

  useEffect(() => {
    if (name) {
      setActiveCountry(countryManager.getCountryByName(name));
    }
  }, [name, countryManager]);

  useEffect(() => {
    const nameValues = extractNameKeys();
    setCommonNativeName(nameValues.length > 0 ? nameValues[0].common : "");

    const currencies = extractCurrencies();
    setCurrencies(currencies.join(", "));

    const languagesArray = extractLanguages();
    setLanguages(languagesArray.join(", "));

    setBorderCountries(extractBorderCountries());
  }, [activeCountry]);

  function extractNameKeys(): Translation[] {
    return Object.values(activeCountry?.name.nativeName || {});
  }

  function extractCurrencies() {
    return Object.values(activeCountry?.currencies || {}).map(currency => currency.name);
  }

  function extractLanguages() {
    return Object.values(activeCountry?.languages || {});
  }

  function extractBorderCountries(): ICountry[] {
    const borders = activeCountry?.borders;
    const currentBorderCountries: ICountry[] = [];
    const countries = countryManager.getCountries();
    borders?.forEach(border => {
      const match = countries.find(country => country.cca3 === border);
      if (match) {
        currentBorderCountries.push(match);
      }
    });
    return currentBorderCountries;
  }

  function borderClickHandler(country: ICountry) {
    setActiveCountry(country);
    navigate(`/country-finder/countries/${country.name.common.toLowerCase()}`);
  }

  return (
    <div className="country-details-page-wrapper">
      <BackButton value="back" />
      <div className="country-details-wrapper">
        <img src={ activeCountry?.flags.png } alt={ activeCountry?.flags.alt } />
        <div className="country-details-container">
          <h2 className="country-title"> { activeCountry?.name.common } </h2>
          <div className="country-details-lists-wrapper">

            <dl className="country-details-list-left">

              <div className="country-details">
                <dt>Native Name</dt>
                <dd> { commonNativeName } </dd>
              </div>

              <div className="country-details">
                <dt>Population</dt>
                <dd> { activeCountry?.population.toLocaleString() } </dd>
              </div>

              <div className="country-details">
                <dt>Region</dt>
                <dd> { activeCountry?.region } </dd>
              </div>

              <div className="country-details">
                <dt>Sub Region</dt>
                <dd> { activeCountry?.subregion } </dd>
              </div>

              <div className="country-details">
                <dt>Capital</dt>
                <dd> { activeCountry?.capital ? activeCountry.capital.join(", ") : null } </dd>
              </div>

            </dl>

            <dl className="country-details-list-right">

              <div className="country-details">
                <dt>Top Level Domain</dt>
                <dd> { activeCountry?.tld } </dd>
              </div>

              <div className="country-details">
                <dt>Currencies</dt>
                <dd> { currencies } </dd>
              </div>

              <div className="country-details">
                <dt>Languages</dt>
                <dd> { languages } </dd>
              </div>

            </dl>
          </div>
          <div className="border-countries-container">
            <h3>Border countries: </h3>
            <div className="border-country-buttons">
              {
                borderCountries ? borderCountries.map((borderCountry, i) => {
                return <BorderButton
                borderClickHandler={ borderClickHandler }
                country={ borderCountry }
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