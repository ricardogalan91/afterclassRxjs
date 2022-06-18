import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';
import { Vendor } from 'src/app/vendor';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productToShow:Vendor;
  constructor(private route:ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductDetail(this.route.snapshot.params['id']).subscribe(
      (val)=>{
        this.productToShow=val;
      }
    )
  }

}
