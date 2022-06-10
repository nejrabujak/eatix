import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';
import {ProductProperty} from "../models/ProductProperty";
import {Route} from "../constaints/route.constants";


@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.css']
})
export class StoreUserComponent {
  @Input()
  products: Product[] | null = [];

  @Output()
  removeProduct: EventEmitter<Product> = new EventEmitter<Product>()

  public route = Route;

  public remove(product: Product): void {
    this.removeProduct.emit(product);
  }


  getProductId(product: Product) {
    return product[ProductProperty.id];
  }

  getProductName(product: Product) {
    return product[ProductProperty.name];
  }

  getProductType(product: Product) {
    return product[ProductProperty.type];
  }

  getProductExpiringDate(product: Product) {
    return product[ProductProperty.expiringDate];
  }

  getProductPrice(product: Product) {
    return product[ProductProperty.price];
  }

}

