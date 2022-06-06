import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductProperty} from '../models/ProductProperty';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  @Output()
  saveProduct: EventEmitter<Product> = new EventEmitter<Product>();

  @Input()
  product: Product | undefined;

  public form!: FormGroup;
  public productProperty = ProductProperty;
  public isEditable: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [ProductProperty.id]: [this.product?.[ProductProperty.id] || ''],
      [ProductProperty.name]: [this.product?.[ProductProperty.name] || ''],
      [ProductProperty.type]: [this.product?.[ProductProperty.type] || ''],
      [ProductProperty.expiring_date]: [this.product?.[ProductProperty.expiring_date] || ''],
      [ProductProperty.price]: [this.product?.[ProductProperty.price] || ''],

    });
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.saveProduct.emit(this.form.value);


    this.resetForm();
  }



  private resetForm(): void {
    this.form.reset();
  }
}
