import "./Card.css";
import { ICountry } from "../../../ICountry";

interface IProps {
  country: ICountry,
  activeCountryHandler: (country: ICountry) => void
}
export default function Card(props: IProps) {
  const { country, activeCountryHandler } = props;

  return (
    <div className="card-container" onClick={() => activeCountryHandler(country)}>
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
          <dd>{ country?.capital }</dd>
        </div>
      </dl>
    </div>
  )
}