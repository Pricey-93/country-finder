import { ICountry } from "../../../ICountry"

interface IProps {
  country: null | ICountry
}
export default function Card(props: IProps) {
  const { country } = props;

  return (
    <>
      <img />
      <h2 className="country-title">{country?.name.common}</h2>
      <ul className="card-stats-list">
        <ul>Population</ul>
        <ul>Region</ul>
      </ul>
    </>
  )
}