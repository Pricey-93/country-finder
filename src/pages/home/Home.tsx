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
    <main className="home-container">
      <div className="controls-wrapper">
        <SearchInput />
        <RegionFilter />
      </div>
      <div className="cards-wrapper">
      {
        countries?.map((country, i) => <Card country={country} key={i} />)
      }
      </div>
    </main>
  )
}