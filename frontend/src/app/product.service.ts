import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable , BehaviorSubject} from 'rxjs';
import { Product } from './models/product';
import { environment } from './environments/environment';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private searchTermSubject = new BehaviorSubject<{ name: string }>({ name: '' });
  term = this.searchTermSubject.asObservable()

  constructor(private http:HttpClient) { }

  public setSearchTerm(criteria: { name: string }): void {
    this.searchTermSubject.next(criteria);
  }
  
  public getProducts(): Observable<Product[]> {
    return this.term.pipe(
      switchMap((criteria: { name: string }) =>
        this.http.get<Product[]>(environment.backendClient).pipe(
          map(products => 
            products.filter((product: Product) => 
              (!criteria.name || product.name.toLowerCase().includes(criteria.name.toLowerCase()))
            )
          )
        )
      )
    );
  }
}
