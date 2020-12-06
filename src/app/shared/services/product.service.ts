import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../class/product';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:9999/product-service/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)   .pipe(
      filter(_ => !!_),
      defaultIfEmpty([])
    );
  }

  public save(user: Product): Observable<any> {
    return this.http.post<Product>(this.productsUrl, user);
  }
}
