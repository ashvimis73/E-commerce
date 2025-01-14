import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  searchText = "";
  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getProducts()
    .subscribe((data) => {
      data.forEach(each => {
        let product: Product = {
          uid: each.pdtUID,
          name: each.pdtName,
          category: each.pdtCategory,
          color: each.color,
          image: each.pdtImg,
          price: each.pdtPrice,
          description: each.pdtDescription,
          code: each.pdtCode,
          type: each.pdtType
        };

        this.products.push(product); 
        this.filteredProducts = [...this.products];  
        this.loading = false;     
      });
    });
  }

  search(evt: any) {
    let valueToBeSearched = evt.target.value;
    this.filteredProducts = this.products.filter(each => each.name.toLowerCase().includes(valueToBeSearched.toLowerCase()) || each.category.toLowerCase().includes(valueToBeSearched.toLowerCase()) || each.code.toLowerCase().includes(valueToBeSearched.toLowerCase()) || each.color.toLowerCase().includes(valueToBeSearched.toLowerCase()) || each.price.toString().includes(valueToBeSearched) || each.description.toLowerCase().includes(valueToBeSearched.toLowerCase()) || each.type.toLowerCase().includes(valueToBeSearched.toLowerCase()) || each.uid.toLowerCase().includes(valueToBeSearched.toLowerCase()));
  }


}
