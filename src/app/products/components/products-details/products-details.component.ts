import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit{

  id!:number;
  data:any;
  loading:boolean=false;

  constructor(private productService: ProductsService , private activateRoute: ActivatedRoute){
    // console.log(activateRoute.snapshot.paramMap.get('id'))
    this.id = Number(activateRoute.snapshot.paramMap.get('id'))
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProductByID()
  }

  getProductByID(){
    this.loading = true;
    this.productService.getProductByID(this.id).subscribe((res)=>{
      this.data = res;
      console.log(res)
      this.loading = false  ;
    })
  }

}
