// bitcoin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BitcoinData } from './interfaces/bitcoin-data.interface';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  private apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private http: HttpClient) {}

  getBitcoinPrice(): Observable<BitcoinData> {
    return this.http.get<BitcoinData>(this.apiUrl);
  }
}
