import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Author {
  id: number = 0;
  name: string = "";
  nationality: string = "";
}
