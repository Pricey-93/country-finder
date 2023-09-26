import "./Home.css";
import { ICountry } from "../../../ICountry";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import RegionFilter from "../../components/ui/regionFilter/RegionFilter";
import Card from "../../components/card/Card";

interface IProps {
  countries: null | ICountry[]
}

export default function Home(props: IProps) {
  const { countries } = props;

  return (
    <div className="home-container">
      <SearchInput />
      <RegionFilter />
      {
        countries?.map((country, i) => <Card country={country} key={i} />)
      }
    </div>
  )
}