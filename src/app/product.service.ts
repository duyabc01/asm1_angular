import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = 'http://localhost:3000/products'
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
  getProductById(productId: string): Observable<any>{
    const url = `${this.apiURL}/${productId}`;
    return this.http.get<any>(url);
  }
}

