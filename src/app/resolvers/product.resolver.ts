import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Route} from "../constants/route.constants";


@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private productService:ProductService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    const id = route.paramMap.get(Route.ID.substring(1));
    const product = this.productService.getProduct(id!);
    if(!product) {
      throw 'Product not found!';
    }
    return product;
  }

}
