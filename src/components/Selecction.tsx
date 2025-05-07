import { Country } from "../types/Country";
import { useState } from "react";
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface SelectionProps {
    countries: Country[];
    onSelect: (country: Country) => void;
}

export default function Selection({ countries, onSelect }: SelectionProps) {
    const [selectedCountryName, setSelectedCountryName] = useState("");

    const handleChange = (name: string) => {
        setSelectedCountryName(name);
        const country = countries.find(c => c.name.common === name);
        if (country) {
            onSelect(country);
        }
    };

    const selectedCountry = countries.find(country => country.name.common === selectedCountryName);

    return (
        <div className="w-full">
            <Listbox value={selectedCountryName} onChange={handleChange}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-xl bg-[#1D4ED8] py-3 pl-3 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-[#EA580C] focus-visible:ring-2 focus-visible:ring-[#EA580C]/50 transition duration-200 border border-[#EA580C]/20">
                        <span className="block truncate">
                            {selectedCountry ? selectedCountry.name.common : 'Select a country'}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-7 w-7 text-white" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#F3F4F6] text-[#1F2937] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 border border-[#9CA3AF]/20">
                        {countries.map((country) => (
                            <Listbox.Option
                                key={country.name.common}
                                value={country.name.common}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-[#3B82F6]/20 text-[#1F2937]' : 'text-[#1F2937] hover:bg-[#3B82F6]/10'
                                    }`
                                }
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-medium text-[#16A34A]' : 'font-normal'}`}>
                                            {country.name.common}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#16A34A]">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
}
