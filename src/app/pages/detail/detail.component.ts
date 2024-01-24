import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  productId:string | null = null;
  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
    this.productId=params.get('id')
    this.loadProductDetails();
    });

  }
  loadProductDetails(){
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(
        (data)=> {
          this.product = data;
        },
        (error)=> {
          console.log('error loading product details:', error);
        }
      )
    }
  }

  }


