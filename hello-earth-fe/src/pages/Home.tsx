import { useEffect, useState } from "react";
import { Country } from "../types/Country";
import Selection from "../components/Selecction";
import InfoCard from "../components/InfoCard";
import { fetchCountries, getUsdValueForCountry } from "../services/countryService";
import { getCountryDescription } from "../services/wikiService";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [usdValue, setUsdValue] = useState<number | null>(null);
    const [countryDescription, setCountryDescription] = useState<string>("");

    useEffect(() => {
        fetchCountries().then(setCountries).catch(console.error);
    }, []);

    const handleCountrySelection = async (country: Country) => {
        setSelectedCountry(country);
        setUsdValue(null);
        setCountryDescription("");

        const [value, description] = await Promise.all([
            getUsdValueForCountry(country),
            getCountryDescription(country.name.common),
        ]);

        setUsdValue(value);
        setCountryDescription(description);
    };

    return (
        <main className="min-h-screen px-4 py-12 flex flex-col items-center justify-center relative overflow-hidden bg-[#F3F4F6] text-[#1F2937] font-sans">
            <div className="absolute inset-0 bg-[url('/globe-pattern.svg')] opacity-20 animate-pulse bg-repeat bg-center"></div>
            <div className="relative z-10 max-w-3xl w-full text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#9CA3AF]/20 p-10 space-y-8">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold tracking-wide drop-shadow-md mb-6 text-[#000000]">
                    Hello Earth
                </h1>

                <Selection countries={countries} onSelect={handleCountrySelection} />

                {selectedCountry && usdValue !== null ? (
                    <motion.div
                        key={selectedCountry.name.common}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center w-full mt-8"
                    >
                        <InfoCard
                            country={selectedCountry}
                            usdValue={usdValue}
                            description={countryDescription}
                        />
                    </motion.div>
                ) : (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="italic mt-6 text-[#6B7280]"
                    >
                        Select a country to discover its wonders.
                    </motion.p>
                )}
            </div>

            <footer className="relative z-10 mt-16 text-center text-[#6B7280]">
                <div className="flex justify-center gap-8 mb-4">
                    <a
                        href="https://github.com/Gabz2808"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#16A34A] transition"
                    >
                        <FaGithub className="w-7 h-7" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gabriel-mairena-granera-391933245/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#16A34A] transition"
                    >
                        <FaLinkedin className="w-7 h-7" />
                    </a>
                </div>
                <p className="text-sm">
                    Made by <span className="font-semibold text-[#16A34A]">Bee28Gabz</span>
                </p>
            </footer>
        </main>
    );
}