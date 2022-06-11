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
      [StoreProperty.name]: [this.store?.[StoreProperty.name] || ''],
      [StoreProperty.email]: [this.store?.[StoreProperty.email] || ''],
      [StoreProperty.password]: [this.store?.[StoreProperty.password] || ''],
      [StoreProperty.confirmPassword]: [this.store?.[StoreProperty.confirmPassword] || ''],
      [StoreProperty.address]: [this.store?.[StoreProperty.address] || ''],
      [StoreProperty.phoneNumber]: [this.store?.[StoreProperty.phoneNumber] || ''],
      [StoreProperty.city]: [this.store?.[StoreProperty.city] || ''],
      [StoreProperty.registrationId]: [this.store?.[StoreProperty.registrationId] || ''],
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

