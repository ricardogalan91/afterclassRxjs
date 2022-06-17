import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  vendedorForm: FormGroup;
  productToEdit:any;
  constructor(private fb:FormBuilder, private productsService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.vendedorForm=this.fb.group({
      fname:['', Validators.required],
      lname:['', Validators.required], 
      product: ['', Validators.required],
      price:['', Validators.required]
    })
    this.productsService.getProductToEdit().subscribe(
      val=>this.productToEdit=val
    )
    if(this.productToEdit){
      this.vendedorForm.get('fname')?.patchValue(this.productToEdit.fname);
      this.vendedorForm.get('lname')?.patchValue(this.productToEdit.lname);
      this.vendedorForm.get('product')?.patchValue(this.productToEdit.product);
      this.vendedorForm.get('price')?.patchValue(this.productToEdit.price);
    }
  }

  onSubmit(){

    this.router.navigate(['/products/list']);
  }

}
