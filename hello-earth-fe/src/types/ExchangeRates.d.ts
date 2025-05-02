export interface ExchangeRates {
  base_code: string;
  conversion_rates: Record<string, number>; // ejemplo: { "CRC": 513.25, ... }
}