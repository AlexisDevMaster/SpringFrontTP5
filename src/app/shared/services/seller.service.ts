import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../class/product';
import {Seller} from '../class/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private sellersUrl: string;

  constructor(private http: HttpClient) {
    this.sellersUrl = 'http://localhost:9999/product-service/sellers';
  }

  public findAll(): Observable<Seller[]> {
    return this.http.get<Seller[]>(this.sellersUrl);
  }

  public save(user: Seller): void {
    this.http.post<Seller>(this.sellersUrl, user);
  }
}
