// src/services/countryService.ts
import { Country } from "../types/Country";
import { getAllCountries } from "../api/Countries";
import { getAllCurrrencies } from "../api/Currencies";
import { ExchangeRates } from "../types/ExchangeRates";

export async function fetchCountries(): Promise<Country[]> {
  return getAllCountries();
}

export async function getUsdValueForCountry(country: Country): Promise<number> {
  try {
    const data: ExchangeRates = await getAllCurrrencies();
    const conversionRates = data.conversion_rates;
    const currencyCode = Object.keys(country.currencies || {})[0];

    if (currencyCode && conversionRates[currencyCode]) {
      return conversionRates[currencyCode];
    } else {
      console.warn(`No se encontró tasa de cambio para: ${currencyCode}`);
      return 0;
    }
  } catch (error) {
    console.error("Error al obtener tasas de cambio:", error);
    return 0;
  }
}
