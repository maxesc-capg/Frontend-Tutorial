import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './model/Customer'
import { CUSTOMER_DATA } from './model/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() { }

  getCategories(): Observable<Customer[]> {
    return of(CUSTOMER_DATA);
  }
}
