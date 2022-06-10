import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFound} from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from "./features/header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponent} from "./features/footer/footer.component";
import {TypeComponent} from "./product-types/type.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ProductComponent} from "./product/product.component";
import {StoreUserComponent} from "./store-user/store-user.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ProductService} from "./services/product.service"
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NewProductComponent} from "./features/new-product/new-product.component";
import {MatIconModule} from "@angular/material/icon";
import {AdminComponent} from "./admin/admin.component";
import {UserService} from "./services/user.service";
import {StoreService} from "./services/store.service";
import {AdminUserComponent} from "./admin/admin-user.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./services/auth.service";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {provideAuthorizationInterceptor} from "./interceptors/authorization.interceptor";
import {NewProductContainerComponent} from "./containers/new-product-form-container/new-product-container.component";
import {ProductListContainerComponent} from "./containers/product-list-container/product-list-container.component";
import {StoreListContainerComponent} from "./containers/store-list-container/store-list-container.component";
import {UserListContainerComponent} from "./containers/user-list-container/user-list-container.component";


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
    StoreUserComponent,
    NewProductComponent,
    AdminComponent,
    AdminUserComponent,
    LoginComponent,
    NewProductContainerComponent,
    ProductListContainerComponent,
    StoreListContainerComponent,
    UserListContainerComponent
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
