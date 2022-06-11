import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ResolverResponse} from "../../constants/resolver-response.constaints";
import {Route} from "../../constants/route.constants";
import {Store} from "../../models/store";
import {StoreProperty} from "../../models/StoreProperty";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'sign-up-store-container',
  templateUrl: './sign-up-store-container.component.html',
})
export class SignUpStoreContainerComponent implements OnInit {

  public store: Store | undefined;
  private isEditing: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.store = response[ResolverResponse.STORE];
      });
    }
  }


  handleSaveStore(store: Store): void {
    if (this.isEditing) {
      this.storeService.update(store[StoreProperty.id]!, store).subscribe(() => {
        this.router.navigate([Route.STORES]);
      });
    } else {
    this.storeService.create(store).subscribe(() => {
      this.router.navigate([Route.STORES]);
    });
  }
    }
}
