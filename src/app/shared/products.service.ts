import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vendor } from '../vendor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList:any=[];
  productToEdit:any;
  url= 'https://62b8883603c36cb9b7c894c3.mockapi.io/api/v1/products';
  constructor(private http:HttpClient) { }

 getProductsList():Observable<Vendor[]>{
    return this.http.get<Vendor[]>(this.url);
  }

  getProductToEdit():Observable<any>{
    return of(this.productToEdit);
  }

  postProduct(product:any):Observable<Vendor>{
    return this.http.post<Vendor>(this.url, product)
  }

  updateProduct(product:Vendor):Observable<Vendor>{
    return this.http.put<Vendor>(this.url+`/${product.id}`,product)
  }

  deleteProduct(id:string):Observable<Vendor>{
    return this.http.delete<Vendor>(this.url+`/${id}`);
  }

  getProductDetail(id:string):Observable<Vendor>{
    return this.http.get<Vendor>(this.url+`/${id}`);
  }
}
