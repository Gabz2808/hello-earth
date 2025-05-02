import { Country } from '../types/Country';

export default function Selection({ country }: { country: Country[] }) {
  return (
    <div>
      <div >
        <div>
          <label htmlFor="location" >Location</label>
          <div>
            <select id="location" name="location" >
              <option value="location" disabled selected>Select a location</option>
              {country.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>

          </div>
        </div>
      </div>
    </div>
  );
}
