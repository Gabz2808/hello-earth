import { Country } from '../types/Country';

export default function InfoCard({ country, usdValue }: { country: Country; usdValue: number }) {

  return (
    <div
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">  
      <p className="text-lg font-bold text-gray-800">Country Information</p>
      <div className="mt-4">
          <div key={country.name.common} className="mb-2">
            <h2 className="text-xl font-semibold">{country.name.common} ({country.cioc})</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area} km²</p>
            <p>Timezones: {country.timezones.join(', ')}</p>
            <p>USD value: {usdValue} $</p>
            <p>
              Currency:{" "}
              {country.currencies &&
                Object.entries(country.currencies)
                  .map(([code, { name, symbol }]) => `${name} (${symbol})`)
                  .join(", ")}
            </p>
            <p>Languages: {Object.values(country.languages ?? {}).join(', ')}</p>
            <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-32 h-auto mt-2" />
          </div>
        
      </div>
    </div>

  );
}