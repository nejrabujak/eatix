import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {Contact_us} from "./contact_us/contact_us";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {TypeComponent} from "./product_types/type.component";
import {ProductComponent} from "./product/product.component";



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: Contact_us },
  { path: 'about', component: AboutusComponent },
  { path: 'type', component: TypeComponent },
  { path: 'products', component: ProductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
