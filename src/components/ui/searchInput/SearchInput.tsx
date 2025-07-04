interface Props {
  searchCountries: (name: string) => void 
}
export default function SearchInput(props: Props) {
  const { searchCountries } = props;

  return (
    <input type="search"
    name="country-search" 
    className="country-search-input"
    placeholder="Search for a country..."
    onChange={ (e) => searchCountries(e.target.value) } 
    />
  )
} 