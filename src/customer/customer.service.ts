import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './model/Customer'
import { CUSTOMER_DATA } from './model/mock-customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMER_DATA);
  }

  saveCustomers(customer: Customer): Observable<Customer> {
    return of(customer);
  }

  deleteCustomers(idCustomer: number): Observable<any> {
    return of(undefined)
  }

  checkNameExists(name: string): Observable<Customer[]> {
    return this.getCustomers();
  }
}
