import "./RegionFilter.css";

export default function RegionFilter() {

  return (
    <select name="region-filter" className="region-filter">
      <option value="Filter by Region" className="filter-option">Filter by Region</option>
      <option value="Africa" className="filter-option">Africa</option>
    </select>
  )
}