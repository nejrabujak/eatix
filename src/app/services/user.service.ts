import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from "../models/user";
import {Product} from "../models/product";

@Injectable()
export class UserService {

  private readonly baseUrl: string = `${environment.backendUrl}/user`;
  httpClient: any;

  constructor(private http:HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }


  public getUser(id:string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  public create(user:User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  public delete(id:string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}