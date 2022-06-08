import {ProductProperty} from "./ProductProperty";

export class Product {
  [ProductProperty.id]?: string;
  [ProductProperty.name]?: string;
  [ProductProperty.type]?: string;
  [ProductProperty.expiringDate]?: string;
  [ProductProperty.price]?: string;

}


