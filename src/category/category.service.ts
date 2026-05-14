import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './model/category';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor() {}
  protected readonly http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/category';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  
saveCategory(category: Category): Observable<void> {
  const hasId = category.id !== null && category.id !== undefined;
  const url = hasId ? `${this.baseUrl}/${category.id}` : this.baseUrl;

  return this.http.put<void>(url, category);
}


  deleteCategory(idCategory: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idCategory}`);
  }
}
