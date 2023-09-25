import "./Home.css";
import SearchInput from "../../components/ui/searchInput/SearchInput";
import RegionFilter from "../../components/ui/regionFilter/RegionFilter";
import Card from "../../components/card/Card";

export default function Home() {

  return (
    <div className="home-container">
      <SearchInput />
      <RegionFilter />
      <Card />
    </div>
  )
}