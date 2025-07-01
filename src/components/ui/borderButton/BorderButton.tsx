import { Link } from "react-router";

interface Props {
  countryName: string,
}
export default function BorderButton(props: Props) {
  const { countryName } = props;

  return (
    <button className="border-button">
      <Link to={`/country-finder/countries/${countryName}`}>{ countryName }</Link>
    </button>
  )
}