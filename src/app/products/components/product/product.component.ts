import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() data!:Iproduct
  @Output() item = new EventEmitter()
  addBtn:boolean=false;
  amount:number = 0

  add(){
    this.item.emit({item: this.data, quantity: this.amount})
  }

}
