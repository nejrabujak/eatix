import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {TypeComponent} from "./product-types/type.component";
import {ProductComponent} from "./product/product.component";
import {Route} from "./constaints/route.constants";
import {LoginComponent} from "./login/login.component";
import {NewProductContainerComponent} from "./containers/new-product-form-container/new-product-container.component";
import {ProductListContainerComponent} from "./containers/product-list-container/product-list-container.component";
import {StoreListContainerComponent} from "./containers/store-list-container/store-list-container.component";
import {UserListContainerComponent} from "./containers/user-list-container/user-list-container.component";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {PageNotFound} from "./page-not-found/page-not-found.component";


const routes: Routes = [


  {
    path: Route.LOGIN,
    component: LoginComponent,
  },
  {
    path: Route.EMPTY,
    component: MainComponent,
  },
      { path: Route.PRODUCTS,
        /*canActivateChild: [AuthorizedGuard],*/
        children: [
      {
        path: Route.EMPTY,
        component: ProductListContainerComponent,
      },
      {
        path: Route.ADD,
        component: NewProductContainerComponent,
      },
        ]
      },

      {
        path: Route.USERS,
        /*canActivateChild: [AuthorizedGuard],*/
        children: [
          {
            path: Route.EMPTY,
            component: UserListContainerComponent,
          },
        ]
      },

      {
        path: Route.STORES,
        /*canActivateChild: [AuthorizedGuard],*/
        children: [
          {
            path: Route.EMPTY,
            component: StoreListContainerComponent,
          },
        ]
      },

  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'type', component: TypeComponent },
  { path: 'store-products', component: ProductComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFound},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
