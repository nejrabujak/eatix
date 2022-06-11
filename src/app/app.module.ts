import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFound} from './features/common/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {ContactUsComponent} from './features/contact-us/contact-us.component';
import {AboutUsComponent} from './features/about-us/about-us.component';
import {MainComponent} from './features/main/main.component';
import {HeaderComponent} from "./features/common/header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponent} from "./features/common/footer/footer.component";
import {TypeComponent} from "./features/product-types/type.component";
import {HomepageComponent} from "./features/homepage/homepage.component";
import {ProductComponent} from "./features/product/product.component";
import {StoreUserProductListComponent} from "./features/store-user/store-user-product-list.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ProductService} from "./services/product.service"
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NewProductComponent} from "./features/new-product/new-product.component";
import {MatIconModule} from "@angular/material/icon";
import {AdminProfileStoreListComponent} from "./features/admin-profile/admin-profile-store-list.component";
import {UserService} from "./services/user.service";
import {StoreService} from "./services/store.service";
import {AdminProfileUserListComponent} from "./features/admin-profile/admin-profile-user-list.component";
import {LoginComponent} from "./features/login/login.component";
import {AuthService} from "./services/auth.service";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {provideAuthorizationInterceptor} from "./interceptors/authorization.interceptor";
import {NewProductContainerComponent} from "./containers/new-product-form-container/new-product-container.component";
import {ProductListContainerComponent} from "./containers/product-list-container/product-list-container.component";
import {StoreListContainerComponent} from "./containers/store-list-container/store-list-container.component";
import {UserListContainerComponent} from "./containers/user-list-container/user-list-container.component";
import {SignUpStoreComponent} from "./features/sign-up-store/sign-up-store.component";
import {SignUpStoreContainerComponent} from "./containers/sign-up-store-container/sign-up-store-container.component";
import {SignUpUserComponent} from "./features/sign-up-user/sign-up-user.component";
import {SignUpUserContainerComponent} from "./containers/sign-up-user-container/sign-up-user-container.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFound,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    TypeComponent,
    AboutUsComponent,
    HomepageComponent,
    MainComponent,
    ProductComponent,
    StoreUserProductListComponent,
    NewProductComponent,
    AdminProfileStoreListComponent,
    AdminProfileUserListComponent,
    LoginComponent,
    SignUpStoreComponent,
    SignUpUserComponent,
    SignUpUserContainerComponent,
    SignUpStoreContainerComponent,
    NewProductContainerComponent,
    ProductListContainerComponent,
    StoreListContainerComponent,
    UserListContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    provideAuthorizationInterceptor(),
    AuthorizedGuard,
    AuthService,
    ProductService,
    UserService,
    StoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
