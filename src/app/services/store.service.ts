import {Injectable} from '@angular/core';
import {Store} from '../models/store';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class StoreService {

  private readonly baseUrl: string = `${environment.backendUrl}/stores`;

  constructor(private http:HttpClient) {
  }

  public getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.baseUrl);
  }


  public getStore(id:string): Observable<Store> {
    return this.http.get<Store>(`${this.baseUrl}/${id}`);
  }

  public create(store:Store): Observable<Store> {
    return this.http.post<Store>(`${this.baseUrl}`, store);
  }

  public delete(id:string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  public update(id:string, store:Store): Observable<Store> {
    return this.http.put<Store>(`${this.baseUrl}/${id}`, store);
  }


}
