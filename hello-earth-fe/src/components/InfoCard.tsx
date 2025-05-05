import { Country } from '../types/Country';

interface InfoCardProps {
    country: Country;
    usdValue: number;
    description: string;
}

interface Currency {
  name: string;
  symbol: string;
}

export default function InfoCard({ country, usdValue, description }: InfoCardProps) {
    const currencies = country.currencies ? Object.values(country.currencies) : [];
    const languages = country.languages ? Object.values(country.languages) : [];

    return (
        <div className="relative flex flex-col items-center p-8 rounded-3xl shadow-xl border border-[#9CA3AF]/20 w-full max-w-lg transition-all duration-300 text-[#1F2937] bg-[#F3F4F6]">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl -z-10"></div>

            <div className="text-center mb-6">
                <h2 className="text-4xl font-extrabold tracking-wide mb-2 text-[#1D4ED8] drop-shadow-md">
                    {country.name.common}
                </h2>
                <span className="text-md text-[#6B7280] font-normal">
                    ({country.cioc ?? country.cca3 ?? "N/A"})
                </span>
            </div>

            <img
                src={country.flags?.png}
                alt={`Flag of ${country.name.common}`}
                className="w-40 h-auto rounded-lg shadow-md border border-[#9CA3AF]/20 mb-6"
            />

            <div className="grid grid-cols-2 gap-y-4 gap-x-4 w-full mb-6 text-sm">
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Capital:</strong>
                    <p className="text-[#1F2937]">{country.capital?.[0] ?? "N/A"}</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Region:</strong>
                    <p className="text-[#1F2937]">{country.region ?? "N/A"}</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Subregion:</strong>
                    <p className="text-[#1F2937]">{country.subregion ?? "N/A"}</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Independent:</strong>
                    <p className="text-[#1F2937]">{country.independent ? "Yes" : "No"}</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Population:</strong>
                    <p className="text-[#1F2937]">{country.population?.toLocaleString() ?? "N/A"}</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Area:</strong>
                    <p className="text-[#1F2937]">{country.area?.toLocaleString()} km²</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Timezones:</strong>
                    <p className="truncate text-[#1F2937]">{country.timezones?.join(", ") ?? "N/A"}</p>
                </div>
                <div>
                    <strong className="text-[#16A34A] drop-shadow-sm">Demonym:</strong>
                    <p className="text-[#1F2937]">{country.demonyms?.eng?.f ?? "N/A"}</p>
                </div>
            </div>

            <div className="w-full mb-6 text-sm">
                <h3 className="text-lg font-semibold text-[#1D4ED8] mb-2 drop-shadow-md">
                    <span role="img" aria-label="economy">💱</span> Economy & Language
                </h3>
                <ul className="space-y-2">
                    <li>
                        <strong className="text-[#16A34A] drop-shadow-sm">USD Value:</strong>
                        <span className="font-bold text-[#16A34A] drop-shadow-sm">${usdValue?.toFixed(2) ?? "N/A"}</span>
                    </li>
                    <li>
                        <strong className="text-[#16A34A] drop-shadow-sm">Currency(s):</strong>
                        {currencies.length > 0 ? (
                            currencies.map((curr: Currency, index) => (
                                <span key={index} className="text-[#1F2937]">
                                    {curr.name} ({curr.symbol})
                                    {index < currencies.length - 1 ? ", " : ""}
                                </span>
                            ))
                        ) : (
                            "N/A"
                        )}
                    </li>
                    <li>
                        <strong className="text-[#16A34A] drop-shadow-sm">Language(s):</strong>
                        <span className="text-[#1F2937]">{languages.length > 0 ? languages.join(", ") : "N/A"}</span>
                    </li>
                </ul>
            </div>

            <div className="w-full text-sm italic text-justify text-[#6B7280]">
                <h3 className="text-lg font-semibold text-[#1D4ED8] mb-2 drop-shadow-md">
                    <span role="img" aria-label="description">📖</span> Description
                </h3>
                <p>{description || "No description available."}</p>
            </div>
        </div>
    );
}