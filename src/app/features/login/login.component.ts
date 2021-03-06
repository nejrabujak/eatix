import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Route} from "../../constants/route.constants";
import {AuthService} from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', {
        validators:
          [Validators.required,
           Validators.email,
           Validators.minLength(3),
           Validators.maxLength(20)],
      updateOn: 'blur'}],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]]
    });
  }


  handleFormSubmit() {
    this.form!.markAllAsTouched();

    if (this.form!.valid) {
      this.authService.logIn({ ...this.form!.value }).subscribe(() => {
        this.router.navigate([Route.HOMEPAGE]);
      });
    }

  }


}
