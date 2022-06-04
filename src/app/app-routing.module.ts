import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {Contact_us} from "./contact_us/contact_us";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {TypeComponent} from "./product_types/type.component";
import {ProductComponent} from "./product/product.component";
import {NewproductComponent} from "./newproduct/newproduct.component";
import {User_storeComponent} from "./store_user/user_store";


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: Contact_us },
  { path: 'about', component: AboutusComponent },
  { path: 'type', component: TypeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'new-product', component: NewproductComponent },
  { path: 'store', component: User_storeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
