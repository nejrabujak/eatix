import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "../models/store";
import {StoreProperty} from "../models/StoreProperty";
import {User} from "../models/user";
import {UserProperty} from "../models/UserProperty";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {
  @Input()
  stores: Store[] | null = [];
  users: User[] | null = [];

  @Output()
  removeStore: EventEmitter<Store> = new EventEmitter<Store>()
  removeUser: EventEmitter<User> = new EventEmitter<User>()

  public storeProperty = StoreProperty;
  public removeAllowed: boolean = false;

  public remove(store: Store): void {
    this.removeStore.emit(store);
  }


  getStoreId(store: Store) {
    return store[StoreProperty.id];
  }

  getStoreName(store: Store) {
    return store[StoreProperty.name];
  }

  getStoreEmail(store: Store) {
    return store[StoreProperty.email];
  }

  getStoreAddress(store: Store) {
    return store[StoreProperty.name];
  }

  getStorePhoneNumber(store: Store) {
    return store[StoreProperty.phone_number];
  }

  getStoreCity(store: Store) {
    return store[StoreProperty.city];
  }

  getStoreRegistrationID(store: Store) {
    return store[StoreProperty.registration_id];
  }

}

