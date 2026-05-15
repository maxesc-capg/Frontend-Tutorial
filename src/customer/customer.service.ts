import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/Customer'

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() { }

  getCategories(): Observable<Customer[]> {
    return new Observable();
  }
}
