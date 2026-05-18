import { Game } from "../../game/model/Game";
import { Customer } from "../../customer/model/Customer";

export interface Loan {
    id: number;
    game: Game;
    customer: Customer;
    loanStart: Date;
    loanEnd: Date;
}