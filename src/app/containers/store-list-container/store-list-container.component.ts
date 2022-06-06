import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Store} from "../../models/store";
import {StoreProperty} from "../../models/StoreProperty";
import {StoreService} from "../../services/store.service";



@Component({
  selector: 'app-store-list-container',
  templateUrl: './store-list-container.component.html',
})
export class StoreListContainerComponent implements OnInit {

  public stores: Subject<Store[]> = new Subject<Store[]>();

  constructor(
    private storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.reloadStores();
  }

  removeStore(store: Store) {
    this.storeService.delete(store[StoreProperty.id]!).subscribe(() => {
      this.reloadStores();
    });
  }

  private reloadStores() {
    this.storeService.getStores().subscribe(stores => {
      this.stores.next(stores);
    });
  }


}
