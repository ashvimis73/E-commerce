import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  selectedProduct!: Product;

  constructor(private dialog: MatDialog) {}

  openProductDetails(product: Product) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '40vw'
    });

    dialogRef.componentInstance.product = product;
  }
}
