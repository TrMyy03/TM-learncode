// bitcoin.component.ts
import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { BitcoinData, CurrencyData } from '../interfaces/bitcoin-data.interface';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],  // Add your styles if needed
})
export class BitcoinComponent implements OnInit {
  bitcoinData!: BitcoinData;
errMessage: any;

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.fetchBitcoinPrice();
  }

  fetchBitcoinPrice(): void {
    this.bitcoinService.getBitcoinPrice().subscribe(
      (data: BitcoinData) => {
        this.bitcoinData = data;
      },
      (error: any) => {
        console.error('Error fetching Bitcoin price:', error);
      }
    );
  }

  getBpiCurrencies(): string[] {
    // Assuming you want to get an array of currency codes
    return Object.keys(this.bitcoinData.bpi);
  }

  getCurrencyData(currencyCode: string): CurrencyData {
    return this.bitcoinData.bpi[currencyCode];
  }
}
