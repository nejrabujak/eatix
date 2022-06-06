import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFound} from './page_not_found/page_not_found';
import {MatButtonModule} from '@angular/material/button';
import {Contact_us} from './contact_us/contact_us';
import {AboutusComponent} from './aboutus/aboutus.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponent} from "./footer/footer.component";
import {TypeComponent} from "./product_types/type.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ProductComponent} from "./product/product.component";
import {StoreUserComponent} from "./store_user/store_user";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ProductService} from "./services/product.service"
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NewProductComponent} from "./new-product/new-product.component";
import {MatIconModule} from "@angular/material/icon";
import {NewProductContainerComponent} from "./containers/new-product-form-container/new-product-container.component";
import {AdminComponent} from "./admin/admin";
import {ProductListContainerComponent} from "./containers/product-list-container/product-list-container.component";
import {StoreListContainerComponent} from "./containers/store-list-container/store-list-container.component";
import {UserListContainerComponent} from "./containers/user-list-container/user-list-container.component";
import {UserService} from "./services/user.service";
import {StoreService} from "./services/store.service";
import {ChooseComponent} from "./choose/choose.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFound,
    Contact_us,
    HeaderComponent,
    FooterComponent,
    TypeComponent,
    AboutusComponent,
    HomepageComponent,
    LoginComponent,
    ProductComponent,
    StoreUserComponent,
    NewProductComponent,
    NewProductContainerComponent,
    ProductListContainerComponent,
    StoreListContainerComponent,
    UserListContainerComponent,
    AdminComponent,
    ChooseComponent,
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
    ProductService,
    UserService,
    StoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
