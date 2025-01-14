import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];

  constructor() { }

  addProductToCart(product: Product) {
    this.products = [...this.products, product];
    return [...this.products];
  }

  removeProductFromCart(uid: string) {
    this.products = this.products.filter(each => each.uid !== uid);
    return [...this.products];
  }

  getCartProducts() {
    return [...this.products];
  }

  getCartProductCount() {
    return this.products.length;
  }
}
