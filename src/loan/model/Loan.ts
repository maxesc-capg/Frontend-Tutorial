import { Game } from "../../game/model/Game";
import { Customer } from "../../customer/model/Customer";

export interface Loan {
    id: number;
    customer: Customer;
    game: Game;
    loanStart: Date;
    loanEnd: Date;
}