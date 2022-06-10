import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductProperty} from '../../models/ProductProperty';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  @Output()
  public saveProduct: EventEmitter<Product> = new EventEmitter<Product>();

  @Input()
  product: Product | undefined;

  public form!: FormGroup;
  public productProperty = ProductProperty;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [ProductProperty.id]: [this.product?.[ProductProperty.id] || ''],
      [ProductProperty.name]: [this.product?.[ProductProperty.name] || ''],
      [ProductProperty.type]: [this.product?.[ProductProperty.type] || ''],
      [ProductProperty.expiringDate]: [this.product?.[ProductProperty.expiringDate] || ''],
      [ProductProperty.price]: [this.product?.[ProductProperty.price] || ''],

    });
  }


  public submit(): void {
    console.log(123);
    if (!this.form.valid) {
      return;
    }
    console.log(123);
    this.saveProduct.emit(this.form.value);
    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}

