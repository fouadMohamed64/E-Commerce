import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartProducts:any[]=[];
  total:number=0;
  success: boolean=false;

  constructor(private cartService: CartService){
    console.log('welcome in cart component')
  }

  ngOnInit(): void {
    this.getAllCart()
  }

  getAllCart(){
    if('product' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('product')!)
    }
    console.log(this.cartProducts)
    this.getCartTotal()
  }
  
  getCartTotal(){
    this.total = 0
    for (const key in this.cartProducts) {
      this.total += this.cartProducts[key].item.price * this.cartProducts[key].quantity
    }
  }
  
  minsAmount(index:number){
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem('product', JSON.stringify(this.cartProducts))
  }
  plusAmount(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem('product', JSON.stringify(this.cartProducts))
  }
  
  detectChanges(){
    localStorage.setItem('product', JSON.stringify(this.cartProducts))
    this.getCartTotal()
  }
  
  deleteItem(index:number){
    this.cartProducts.splice(index, 1)
    localStorage.setItem('product', JSON.stringify(this.cartProducts))
    this.getCartTotal()
    Swal.fire({
      title: "Done",
      text: "Deleted Success",
      icon: "success"
    });
  }
  
  clearCart(){
    this.cartProducts = [];
    localStorage.setItem('product', JSON.stringify(this.cartProducts))
    this.getCartTotal()
    Swal.fire({
      title: "Done",
      text: "Deleted Success",
      icon: "success"
    });
  }

  addCart(){
    let products = this.cartProducts.map((item)=>{
      return {productId: item.item.id, quantity: item.quantity}
    })
    let model = {
      userId: 5,
      date: new Date(),
      products: products
    }
    console.log(model)
    this.cartService.createNewCart(model).subscribe((res)=>{
      this.success = true;
    })
  }

}
