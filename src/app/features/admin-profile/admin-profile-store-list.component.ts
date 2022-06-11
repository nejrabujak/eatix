import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "../../models/store";
import {StoreProperty} from "../../models/StoreProperty";

@Component({
  selector: 'app-admin-store-list',
  templateUrl: './admin-profile-store-list.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminProfileStoreListComponent {
  @Input()
  stores: Store[] | null = [];

  @Output()
  removeStore: EventEmitter<Store> = new EventEmitter<Store>()


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
    return store[StoreProperty.phoneNumber];
  }

  getStoreCity(store: Store) {
    return store[StoreProperty.city];
  }

  getStoreRegistrationID(store: Store) {
    return store[StoreProperty.registrationId];
  }

}
