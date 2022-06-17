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
  url= 'https://62aca25c402135c7acb5e786.mockapi.io/api/v1/vendors'
  constructor(private http:HttpClient) { }

 /* getProductsList():Observable<Vendor[]>{
    return of({})
  }*/

  getProductToEdit():Observable<any>{
    return of(this.productToEdit);
  }

 /* postProduct(product:any):Observable<any>{
    return this.http.post<any>(this.url, product)
  }*/
}
