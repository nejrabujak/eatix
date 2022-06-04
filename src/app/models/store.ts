
import {StoreProperty} from "./StoreProperty";

export class Store {
  [StoreProperty.id]?: string;
  [StoreProperty.name]?: string;
  [StoreProperty.email]?: string;
  [StoreProperty.password]?: string;
  [StoreProperty.address]?: string;
  [StoreProperty.phone_number]?: string;
  [StoreProperty.city]?: string;
  [StoreProperty.registration_id]?: string;

}
