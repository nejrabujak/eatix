import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {SignInForm} from '../models/auth/sign-in-interface';
import {AuthResponse} from '../models/auth/auth-response.interface';
import {Router} from '@angular/router';
import {Route} from '../constants/route.constants';

@Injectable()
export class AuthService {

  private readonly baseUrl: string = `${environment.backendUrl}/authenticate`;

  private jwt: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  public getToken(): string | null {
    return this.jwt;
  }

  public logIn(signInForm: SignInForm): Observable<void> {
    const body = {
      email: signInForm.email,
      password: signInForm.password,
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}`, body).pipe(
      mergeMap(response => {
        this.jwt = response.token;
        return of(undefined);
      })
    );
  }

  public goToLogin():void {
    this.router.navigate([Route.LOGIN]);
  }

}
