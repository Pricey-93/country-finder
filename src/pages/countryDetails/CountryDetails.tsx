import { useEffect, useState } from "react";
import { useContext } from "../../layouts/RootLayout";
import { useParams } from "react-router-dom";
import { ICountry } from "../../api/ICountry";
import BackButton from "../../components/ui/backButton/BackButton";
import BorderButton from "../../components/ui/borderButton/BorderButton";

export default function CountryDetails() {
  const { countryManager } = useContext();
  let { name } = useParams();

  const [activeCountry, setActiveCountry] = useState<null | ICountry>(null);
  const [borderCountries, setBorderCountries] = useState<null | ICountry[]>(null);
  const [commonNativeName, setCommonNativeName] = useState<string>("");
  const [languages, setLanguages] = useState<string>("");
  const [currencies, setCurrencies] = useState<string>("");

  useEffect(() => {
    if (name) {
      setActiveCountry(countryManager.getCountryByName(name));
    }
  
    const nameKeys = [];
    for (const key in activeCountry?.name.nativeName) {
      nameKeys.push(key);
    }
    if (activeCountry?.name.nativeName) {
      setCommonNativeName(activeCountry.name.nativeName[nameKeys[0]].common);
    }

    const currenciesArray = activeCountry?.currencies ? Object.values(activeCountry.currencies) : [];
    const currencies = [];
    for (const currency of currenciesArray) {
      currencies.push(Object.values(currency)[0]);
    }
    setCurrencies(currencies.join(", "));
    
    const languagesArray = activeCountry?.languages ? Object.values(activeCountry.languages) : [];
    setLanguages(languagesArray.join(", "));

    console.log(activeCountry)
  }, [activeCountry]);

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
              {/* {
                borderCountries ? borderCountries.map((borderCountry, i) => {
                return <BorderButton
                country={ borderCountry }
                borderClickHandler={ changeActiveCountry }
                key={ i }
                />
              })
              :
              null
              } */}
            </div> 
          </div> 
        </div>
        
      </div>
    </div>
  )
}