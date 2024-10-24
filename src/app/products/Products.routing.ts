import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

const routes: Routes = [
  {path: '', component: AllProductsComponent, title: 'Products'},
  {path: 'details/:id', component: ProductsDetailsComponent, title: 'Product Details'}
];

export const ProductsRoutes = RouterModule.forChild(routes);