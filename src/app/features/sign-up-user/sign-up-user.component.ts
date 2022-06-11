import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../../models/user";
import {UserProperty} from "../../models/UserProperty";



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

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [UserProperty.id]: [this.user?.[UserProperty.id] || ''],
      [UserProperty.name]: [this.user?.[UserProperty.name] || ''],
      [UserProperty.surname]: [this.user?.[UserProperty.surname] || ''],
      [UserProperty.email]: [this.user?.[UserProperty.email] || ''],
      [UserProperty.password]: [this.user?.[UserProperty.password] || ''],
      [UserProperty.confirmPassword]: [this.user?.[UserProperty.confirmPassword] || ''],
      [UserProperty.address]: [this.user?.[UserProperty.address] || ''],
      [UserProperty.city]: [this.user?.[UserProperty.city] || ''],
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

