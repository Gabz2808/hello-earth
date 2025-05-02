import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countries";
import { Country } from "../types/Country";
import Selection from "../components/Selecction";
export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getAllCountries().then(setCountries).catch(console.error);
  }, []);

  return (
    <div >
      <Selection country={countries} />
    </div>
  );
}
