import "./SearchInput.css";

interface IProps {
  searchCountries: (name: string) => void 
}
export default function SearchInput(props: IProps) {
  const { searchCountries } = props;

  return (
    <input type="search"
    name="country-search" 
    className="country-search-input"
    placeholder="Search for a country..."
    onKeyDown= {
      (event) => {
        if (event.key === "Enter") {
          const inputElement = event.target as HTMLInputElement;
          searchCountries(inputElement.value);
        }
      } 
    } 
    />
  )
} 