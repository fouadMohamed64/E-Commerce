import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  createNewCart(model:any){
    return this.httpClient.post(`${environment.BASEURL}/carts`, model)
  }


}
