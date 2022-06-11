import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Route} from "../constants/route.constants";
import {StoreService} from "../services/store.service";
import {Store} from "../models/store";


@Injectable()
export class StoreResolver implements Resolve<Store> {

  constructor(private storeService:StoreService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Store> | Promise<Store> | Store {
    const id = route.paramMap.get(Route.ID.substring(1));
    const store = this.storeService.getStore(id!);
    if(!store) {
      throw 'Store not found!';
    }
    return store;
  }

}
