import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ProductProperty} from "../../models/ProductProperty";


@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
})
export class ProductListContainerComponent implements OnInit {

  public products: Subject<Product[]> = new Subject<Product[]>();

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.reloadProducts();
  }

  removeProduct(product: Product) {
    this.productService.delete(product[ProductProperty.id]!).subscribe(() => {
      this.reloadProducts();
    });
  }

  private reloadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products.next(products);
    });
  }


}
