import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './model/Customer';
import { CUSTOMER_DATA } from './model/mock-customers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  protected readonly http = inject(HttpClient);

  private baseUrl = 'http://localhost:8080/customer';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  saveCustomers(customer: Customer): Observable<Customer> {
    const hasId = customer.id !== null && customer.id !== undefined;
    const url = hasId ? `${this.baseUrl}/${customer.id}` : this.baseUrl;

    return this.http.put<Customer>(url, customer);
  }

  deleteCustomers(idCustomer: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCustomer}`);
    }

  checkNameExists(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/customer?name=${name}`);
  }
}
