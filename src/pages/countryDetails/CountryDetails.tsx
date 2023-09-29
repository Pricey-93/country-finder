import "./CountryDetails.css";
import { ICountry } from "../../../ICountry";
import Button from "../../components/ui/button/Button";

interface IProps {
  activeCountry: ICountry,
  activeCountryHandler: (country: ICountry) => void,
  removeCountryHandler: () => void
}
export default function CountryDetails(props: IProps) {
  const { activeCountry, activeCountryHandler, removeCountryHandler } = props;

  return (
    <div className="country-details-wrapper">
      <Button callbackHandler={ removeCountryHandler }/>
    </div>
  )
}