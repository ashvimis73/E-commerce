import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<{
      forEach(arg0: (each: any) => void): unknown;data: any[]
}>("https://6332cfeda54a0e83d25909d3.mockapi.io/api/v1/products");
  }
}
