import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get(`${environment.BASEURL}/products`) 
  }

  getAllCategories(){
    return this.httpClient.get(`${environment.BASEURL}/products/categories`)
  }


  getProductsByCatName(catName:string){
    return this.httpClient.get(`${environment.BASEURL}/products/category/${catName}`)
  }

  getProductByID(id:number){
    return this.httpClient.get(`${environment.BASEURL}/products/${id}`)
  }

}
