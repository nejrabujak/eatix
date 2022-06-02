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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
