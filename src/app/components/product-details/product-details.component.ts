import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService, private dialog: MatDialog) {}
  
  addToCart() {
    this.cartService.addProductToCart(this.product);
    this.dialog.closeAll();
  }
}
