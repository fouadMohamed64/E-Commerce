import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../service/products.service';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {

  products:Iproduct[]=[]
  categories:string[]=[];
  loading:boolean = false;
  cartProducts:any = [];
  page: any =1;

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.getProducts()
    this.getAllCategories()
  }

  getProducts(){
    this.loading = true;
    this.productsService.getAllProducts().subscribe((data:any)=>{ 
      this.products = data;
      this.loading = false;
    })
  }
  
  getAllCategories(){
    this.loading = true;
    this.productsService.getAllCategories().subscribe((data:any)=>{
      this.categories = data;
      this.loading = false;
    })
  }
  
  filterCategories(event:any){
    let val = event.target.value
    val == 'all' ? this.getProducts() : this.getProductsByCategoreName(val) 
  }
  
  getProductsByCategoreName(catName:string){
    this.loading = true;
    this.productsService.getProductsByCatName(catName).subscribe((data:any)=>{
      this.products = data;
      this.loading = false;
    })
  }

  addToCart(event:any){
    if('product' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('product')!)
      let exist = this.cartProducts.find((item:any)=> item.item.id == event.item.id)
      if(exist){
        alert('this item already been in cart...')
      }else{
        this.cartProducts.push(event)
        localStorage.setItem('product', JSON.stringify(this.cartProducts))
      }
    }else{
      this.cartProducts.push(event)
      localStorage.setItem('product', JSON.stringify(this.cartProducts))
    }
  }

  changePage(event:any){
    this.page = event;
  }

}
