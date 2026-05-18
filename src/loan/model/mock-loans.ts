import { PaginatedData } from '../../app/core/model/page/PaginatedData';
import { Loan } from './Loan';

export const LOAN_DATA: PaginatedData<Loan> = {
    content: [
        {
            id: 1,
            game: {} as any,
            customer: {} as any,
            loanStart: {} as any,
            loanEnd: {} as any,
        },
        {
            id: 2,
            game: {} as any,
            customer: {} as any,
            loanStart: {} as any,
            loanEnd: {} as any,
        },
    ],
    pageable: {
        pageSize: 5,
        pageNumber: 0,
        sort: [{ property: 'id', direction: 'ASC' }],
    },
    totalElements: 2
};
