import { Country } from "../types/Country";

interface SelectionProps {
  countries: Country[];
  onSelect: (country: Country) => void;
}

export default function Selection({ countries, onSelect }: SelectionProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(
      (country) => country.name.common === event.target.value
    );
    if (selectedCountry) {
      onSelect(selectedCountry);
    }
  };

  return (
    <select onChange={handleChange} className="p-2 border rounded">
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country.name.common} value={country.name.common}>
          {country.name.common}
        </option>
      ))}
    </select>
  );
}