import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../app/core/model/page/Pageable';
import { Loan } from './model/Loan';
import { PaginatedData } from '../app/core/model/page/PaginatedData';
import { LOAN_DATA } from './model/mock-loans';


@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(){}

  getLoans(pageable: Pageable): Observable<PaginatedData<Loan>> {
    return of(LOAN_DATA);
  }

  saveLoan(loan: Loan): Observable<void> {
    return of()
  }

  deleteLoan(idLoan: number): Observable<void> {
    return of();
  }
}
