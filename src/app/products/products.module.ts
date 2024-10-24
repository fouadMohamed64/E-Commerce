import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutes } from './Products.routing';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ProductsDetailsComponent,
    AllProductsComponent,
    ProductComponent
  ],
  imports: [
    ProductsRoutes,
    CommonModule,
    NgxPaginationModule,
    // FormsModule,
    SharedModule
  ],
})
export class ProductsModule {}