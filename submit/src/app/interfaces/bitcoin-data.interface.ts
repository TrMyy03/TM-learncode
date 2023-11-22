export interface BitcoinData {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    [currency: string]: CurrencyData; // Add index signature
  };
}

export interface CurrencyData {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}
