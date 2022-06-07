import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {Contact_us} from "./contact_us/contact_us";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {TypeComponent} from "./product_types/type.component";
import {ProductComponent} from "./product/product.component";
import {StoreUserComponent} from "./store_user/store_user";
import {NewProductComponent} from "./new-product/new-product.component";
import {Route} from "./constaints/route.constants";
import {AdminComponent} from "./admin/admin";
import {ChooseComponent} from "./choose/choose.component";


const routes: Routes = [

  {
    path: Route.EMPTY,
    component: LoginComponent
  },
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: Contact_us },
  { path: 'about', component: AboutusComponent },
  { path: 'type', component: TypeComponent },
  { path: 'store-products', component: ProductComponent },
  { path: 'products', component: NewProductComponent },
  { path: 'store', component: StoreUserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'choose', component: ChooseComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
