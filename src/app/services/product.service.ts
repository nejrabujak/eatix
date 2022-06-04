import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductService {

  private readonly baseUrl: string = `${environment.backendUrl}/newproduct`;

  constructor(private http:HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  public getProduct(id:string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  public create(product:Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product);
  }

  public update(id:string, product:Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  public delete(id:string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
