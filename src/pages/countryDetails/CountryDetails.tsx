import "./CountryDetails.css";
import { useEffect, useRef, useState } from "react";
import { ICountry } from "../../../ICountry";
import Button from "../../components/ui/button/Button";


interface IProps {
  activeCountry: ICountry,
  activeCountryHandler: (country: ICountry) => void,
  removeCountryHandler: () => void
}
export default function CountryDetails(props: IProps) {
  const { activeCountry, activeCountryHandler, removeCountryHandler } = props;
  const commonNativeName = useRef<string>("");
  const [languages, setLanguages] = useState<string>("");
  const [currencies, setCurrencies] = useState<string>("");

  useEffect(() => {
    const nameKeys = [];
    for (const key in activeCountry.name.nativeName) {
      nameKeys.push(key);
    }
    if (activeCountry.name.nativeName) {
      commonNativeName.current = activeCountry.name.nativeName[nameKeys[0]].common;
    }
    const currenciesArray = activeCountry.currencies ? Object.values(activeCountry.currencies) : [];
    const currencies = [];
    for (const currency of currenciesArray) {
      currencies.push(Object.values(currency)[0]);
    }
    
    setCurrencies(currencies.join(", "));
    
    const languagesArray = activeCountry.languages ? Object.values(activeCountry.languages) : [];
    setLanguages(languagesArray.join(", "));
    
    console.log(activeCountry)
  }, [activeCountry]);

  return (
    <div className="country-details-page-wrapper">
      <Button callbackHandler={ removeCountryHandler } value="back" />
      <div className="country-details-wrapper">
        <img src={ activeCountry.flags.png } alt={ activeCountry.flags.alt } />
        <div className="country-details-container">
          <h2 className="country-title"> { activeCountry.name.common } </h2>
          <div className="country-details-lists-wrapper">

            <dl className="country-details-list-left">

              <div className="country-details">
                <dt>Native Name</dt>
                <dd> { commonNativeName.current } </dd>
              </div>

              <div className="country-details">
                <dt>Population</dt>
                <dd> { activeCountry.population.toLocaleString() } </dd>
              </div>

              <div className="country-details">
                <dt>Region</dt>
                <dd> { activeCountry.region } </dd>
              </div>

              <div className="country-details">
                <dt>Sub Region</dt>
                <dd> { activeCountry.subregion } </dd>
              </div>

              <div className="country-details">
                <dt>Capital</dt>
                <dd> { activeCountry.capital ? activeCountry.capital.join(", ") : null } </dd>
              </div>

            </dl>

            <dl className="country-details-list-right">

              <div className="country-details">
                <dt>Top Level Domain</dt>
                <dd> { activeCountry.tld } </dd>
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
            <div>
              {
                activeCountry.borders?.map((borderCountry, i) => {
                return <Button 
                value={ borderCountry }
                key={ i }
                />
              })
              }
            </div> 
          </div> 
        </div>
        
      </div>
    </div>
  )
}