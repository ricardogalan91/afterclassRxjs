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
    this.productToEdit=this.productsService.productToEdit;
    if(this.productToEdit){
      this.vendedorForm.get('fname')?.patchValue(this.productToEdit.fname);
      this.vendedorForm.get('lname')?.patchValue(this.productToEdit.lname);
      this.vendedorForm.get('product')?.patchValue(this.productToEdit.product);
      this.vendedorForm.get('price')?.patchValue(this.productToEdit.price);
    }
  }

  onSubmit(){
    const product= this.vendedorForm.value;
    if(!this.productToEdit){
      this.productsService.postProduct(product).subscribe(
        (val)=>{
          console.log(val);
          this.router.navigate(['/products/list']);
        }
      );
    }else{
      product['id']=this.productToEdit.id;
      this.productsService.updateProduct(product).subscribe(
        (val)=>{
          this.productsService.productToEdit=null;
          this.router.navigate(['/products/list']);
        }
      )
    }
  }

  onNavigateBack(){
    this.productsService.productToEdit=null;
    this.router.navigate(['/products/list'])
  }

}
