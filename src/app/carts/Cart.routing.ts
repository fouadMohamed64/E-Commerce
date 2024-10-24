import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart/cart.component";


const routes: Routes = [
    {path: '', component: CartComponent, title: 'Cart'},
]


export const CartRoutes = RouterModule.forChild(routes)