import { Pageable } from './Pageable';

export class PaginatedData <TData>{
    content: TData[] = [];
    pageable: Pageable = new Pageable;
    totalElements: number = 0;
}