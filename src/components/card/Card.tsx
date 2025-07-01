import { Country } from "../../api/types";
import { useNavigate } from 'react-router';

interface Props {
  country: Country
}
export default function Card(props: Props) {
  const { country } = props;
  const navigate = useNavigate();

  const cardClickHandler = () => {
    navigate(`countries/${country.name.common.toLowerCase()}`);
  };
  
  return (
    <div className="card-container" onClick={() => cardClickHandler()}>
      <img className="country-flag" src={ country.flags.png } alt={ country.flags.alt } />
      <h2 className="country-title">{ country.name.common } </h2>
      <dl className="card-details-list">
        <div className="card-details-wrapper">
          <dt>Population</dt>
          <dd>{ country?.population.toLocaleString() }</dd>
        </div>
        <div className="card-details-wrapper">
          <dt>Region</dt>
          <dd>{ country.region }</dd>
        </div>
        <div className="card-details-wrapper">
          <dt>Capital</dt>
          <dd>{ country.capital ? country.capital.join(", "): "" }</dd>
        </div>
      </dl>
    </div>
  )
}