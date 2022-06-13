import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      [ProductProperty.name]: [this.product?.[ProductProperty.name],[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]],

      [ProductProperty.type]: [this.product?.[ProductProperty.type],[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]],

      [ProductProperty.expiringDate]: [this.product?.[ProductProperty.expiringDate],[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11)]],

      [ProductProperty.price]: [this.product?.[ProductProperty.price],[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)]],

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

