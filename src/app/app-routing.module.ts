import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  // {path: 'details/:id', component: ProductsDetailsComponent, title: 'Products Details'},
  // {path: 'cart', component: CartComponent, title: 'Cart'},
  {
    path: 'products',
      loadChildren: ()=> import('./products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'cart',
      loadChildren: ()=> import('./carts/carts.module').then((m)=>m.CartsModule)
  },
  {path: '**', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
