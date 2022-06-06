import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';
import {ProductProperty} from "../models/ProductProperty";


@Component({
  selector: 'app-store-user',
  templateUrl: './store_user.html',
  styleUrls: ['./store_user.css']
})
export class StoreUserComponent {
  @Input()
  products: Product[] | null = [];

  @Output()
  removeProduct: EventEmitter<Product> = new EventEmitter<Product>()

  public removeAllowed: boolean = false;

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
    return product[ProductProperty.expiring_date];
  }

  getProductPrice(product: Product) {
    return product[ProductProperty.price];
  }

}

