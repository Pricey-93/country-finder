import "./Card.css";
import { ICountry } from "../../api/ICountry";

interface IProps {
  country: ICountry,
  countryClickHandler: (country: ICountry) => void
}
export default function Card(props: IProps) {
  const { country, countryClickHandler } = props;

  return (
    <div className="card-container" onClick={() => countryClickHandler(country)}>
      <img className="country-flag" src={ country?.flags.png } alt={ country?.flags.alt } />
      <h2 className="country-title">{ country?.name.common } </h2>
      <dl className="card-details-list">
        <div className="card-details-wrapper">
          <dt>Population</dt>
          <dd>{ country?.population.toLocaleString() }</dd>
        </div>
        <div className="card-details-wrapper">
          <dt>Region</dt>
          <dd>{ country?.region }</dd>
        </div>
        <div className="card-details-wrapper">
          <dt>Capital</dt>
          <dd>{ country.capital ? country.capital.join(", "): "" }</dd>
        </div>
      </dl>
    </div>
  )
}