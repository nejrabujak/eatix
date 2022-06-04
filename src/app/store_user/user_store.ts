import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-store-user',
  templateUrl: './store_user.html',
  styleUrls: ['./store_user.css']
})
export class User_storeComponent {
  @Input()
  products: Product[] | null = [];

  @Output()
  removeProduct: EventEmitter<Product> = new EventEmitter<Product>()

  public remove(product: Product): void {
    this.removeProduct.emit(product);
  }


}
