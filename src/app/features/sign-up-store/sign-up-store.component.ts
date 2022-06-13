import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from "../../models/store";
import {StoreProperty} from "../../models/StoreProperty";


@Component({
  selector: 'app-sign-up-store',
  templateUrl: './sign-up-store.component.html',
  styleUrls: ['./sign-up-store.component.css']
})
export class SignUpStoreComponent implements OnInit {

  @Output()
  public saveStore: EventEmitter<Store> = new EventEmitter<Store>();

  @Input()
  store: Store | undefined;

  public form!: FormGroup;
  public storeProperty = StoreProperty;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [StoreProperty.id]: [this.store?.[StoreProperty.id] || ''],
      [StoreProperty.name]: [this.store?.[StoreProperty.name], [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]],

      [StoreProperty.email]: [this.store?.[StoreProperty.email],[
              Validators.required,
              Validators.email,
              Validators.minLength(3),
              Validators.maxLength(20)]],

      [StoreProperty.password]: [this.store?.[StoreProperty.password], [
        Validators.required,
        Validators.minLength(8)]],

      [StoreProperty.address]: [this.store?.[StoreProperty.address], [
        Validators.required,
        Validators.minLength(5)]],

      [StoreProperty.phoneNumber]: [this.store?.[StoreProperty.phoneNumber], [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12)]],

      [StoreProperty.city]: [this.store?.[StoreProperty.city],[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]],

      [StoreProperty.registrationId]: [this.store?.[StoreProperty.registrationId],[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]]
    });
  }


  public submit(): void {
    console.log(123);
    if (!this.form.valid) {
      return;
    }
    console.log(123);
    this.saveStore.emit(this.form.value);
    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}

