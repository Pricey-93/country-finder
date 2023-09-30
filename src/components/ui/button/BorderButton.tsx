import { ICountry } from "../../../../ICountry";

interface Iprops {
  borderClickHandler: (country: ICountry) => void,
  country: ICountry,
}
export default function Button(props: Iprops) {
  const { borderClickHandler, country } = props;

  return (
    <button onClick={ () => borderClickHandler(country) }>{ country.name.common }</button>
  )
}