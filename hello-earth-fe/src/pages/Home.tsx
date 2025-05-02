import { useEffect, useState } from "react";
import { Country } from "../types/Country";
import Selection from "../components/Selecction";
import InfoCard from "../components/InfoCard";
import { fetchCountries, getUsdValueForCountry } from "../services/countryService";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [usdValue, setUsdValue] = useState<number | null>(null);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch(console.error);
  }, []);

  const handleCountrySelection = async (country: Country) => {
    setSelectedCountry(country);
    setUsdValue(null);

    const value = await getUsdValueForCountry(country);
    setUsdValue(value);
  };

  return (
    <div>
      <Selection countries={countries} onSelect={handleCountrySelection} />
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
        <p className="text-lg font-bold text-gray-800">Country Information</p>
        <div className="mt-4">
          {selectedCountry && usdValue !== null && (
            <InfoCard country={selectedCountry} usdValue={usdValue} />
          )}
        </div>
      </div>
    </div>
  );
}
