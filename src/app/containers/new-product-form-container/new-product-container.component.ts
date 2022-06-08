import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ResolverResponse} from "../../constaints/resolver-response.constaints";
import {Route} from "../../constaints/route.constants";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ProductProperty} from "../../models/ProductProperty";


@Component({
  selector: 'new-product-form-container',
  templateUrl: './new-product-container.component.html',
})
export class NewProductContainerComponent implements OnInit {

  public product: Product | undefined;
  private isEditing: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.product = response[ResolverResponse.PRODUCT];
      });
    }
  }


  handleSaveProduct(product: Product): void {
    if (this.isEditing) {
      this.productService.update(product[ProductProperty.id]!, product).subscribe(() => {
        this.router.navigate([Route.PRODUCTS]);
      });
    } else {
    this.productService.create(product).subscribe(() => {
      this.router.navigate([Route.PRODUCTS]);
    });
  }
    }
}
