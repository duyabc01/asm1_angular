import { ProductService } from './../../product.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products : Product[] = [];
  constructor(private productsService: ProductService){}
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
