import {ProductProperty} from "./ProductProperty";

export class Product {
  [ProductProperty.id]?: string;
  [ProductProperty.name]?: string;
  [ProductProperty.type]?: string;
  [ProductProperty.expiring_date]?: string;
  [ProductProperty.price]?: string;

}


