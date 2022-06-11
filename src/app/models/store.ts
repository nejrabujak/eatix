
import {StoreProperty} from "./StoreProperty";

export class Store {
  [StoreProperty.id]?: string;
  [StoreProperty.name]: string;
  [StoreProperty.email]: string;
  [StoreProperty.password]: string;
  [StoreProperty.confirmPassword]: string;
  [StoreProperty.address]: string;
  [StoreProperty.phoneNumber]: string;
  [StoreProperty.city]: string;
  [StoreProperty.registrationId]: string;

}
