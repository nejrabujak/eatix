import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './features/main/main.component';
import {HomepageComponent} from "./features/homepage/homepage.component";
import {ContactUsComponent} from "./features/contact-us/contact-us.component";
import {AboutUsComponent} from "./features/about-us/about-us.component";
import {TypeComponent} from "./features/product-types/type.component";
import {ProductComponent} from "./features/product/product.component";
import {Route} from "./constants/route.constants";
import {LoginComponent} from "./features/login/login.component";
import {NewProductContainerComponent} from "./containers/new-product-form-container/new-product-container.component";
import {ProductListContainerComponent} from "./containers/product-list-container/product-list-container.component";
import {StoreListContainerComponent} from "./containers/store-list-container/store-list-container.component";
import {UserListContainerComponent} from "./containers/user-list-container/user-list-container.component";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {PageNotFound} from "./features/common/page-not-found/page-not-found.component";
import {SignUpStoreContainerComponent} from "./containers/sign-up-store-container/sign-up-store-container.component";
import {SignUpUserContainerComponent} from "./containers/sign-up-user-container/sign-up-user-container.component";


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
      },]
  },
  {
    path: Route.PRODUCTS + Route.SEPARATOR + Route.ADD,
    component: NewProductContainerComponent,
  },

  { path: Route.USERS,
    /*canActivateChild: [AuthorizedGuard],*/
    children: [
      {
        path: Route.EMPTY,
        component: UserListContainerComponent,
      },]
  },
  {
    path: Route.USERS + Route.SEPARATOR + Route.ADD,
    component: SignUpUserContainerComponent,
  },

  { path: Route.STORES,
    /*canActivateChild: [AuthorizedGuard],*/
    children: [
      {
        path: Route.EMPTY,
        component: StoreListContainerComponent,
      },]
  },
  {
    path: Route.STORES + Route.SEPARATOR + Route.ADD,
    component: SignUpStoreContainerComponent,
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
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
