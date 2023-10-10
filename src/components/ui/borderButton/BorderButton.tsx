import { ICountry } from "../../../api/ICountry";

interface Iprops {
  borderClickHandler: (country: ICountry) => void,
  country: ICountry,
}
export default function BorderButton(props: Iprops) {
  const { borderClickHandler, country } = props;

  return (
    <button className="border-button" onClick={ () => borderClickHandler(country) }>{ country.name.common }</button>
  )
}