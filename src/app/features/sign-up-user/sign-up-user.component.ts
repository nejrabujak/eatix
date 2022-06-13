import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../../models/user";
import {UserProperty} from "../../models/UserProperty";
import {Route} from "../../constants/route.constants";



@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {

  @Output()
  public saveUser: EventEmitter<User> = new EventEmitter<User>();

  @Input()
  user: User | undefined;

  public form!: FormGroup;
  public userProperty = UserProperty;
  public route = Route;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [UserProperty.id]: [this.user?.[UserProperty.id] || ''],
      [UserProperty.name]: [this.user?.[UserProperty.name], [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)]],

      [UserProperty.surname]: [this.user?.[UserProperty.surname],[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]],

      [UserProperty.email]: [this.user?.[UserProperty.email] ,[
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(20)]],

      [UserProperty.password]: [this.user?.[UserProperty.password],[
        Validators.required,
        Validators.minLength(8)]],

      [UserProperty.address]: [this.user?.[UserProperty.address],  [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12)]],

      [UserProperty.city]: [this.user?.[UserProperty.city], [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]],
    });
  }

  public submit(): void {
    console.log(123);
    if (!this.form.valid) {
      return;
    }
    console.log(123);
    this.saveUser.emit(this.form.value);
    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

}

