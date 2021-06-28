import { Person } from "./Person";

export class Account {

    constructor(private accountHolder: Person, private amount?: number){}

    get getAccountHolder():Person {
        return this.accountHolder;
    }
    set setAccountHolder(accountHolder: Person){
        this.accountHolder = accountHolder;
    }

    get getAmount():number {
        return this.amount ? this.amount : 0;
    }
    set setAmount(amount: number){
        this.amount = amount;
    }

    showAccount():void {
        console.log(`Account Holder: ${this.accountHolder.getName}\nAmount: ${this.amount}`);
    }

    deposit(amount:number):void {
        if(amount >= 0) {
            this.amount
                ? this.amount+=amount 
                : this.amount = 0;
        }
    }

    retire(amount: number):void {
        if(this.amount){
            this.amount -= amount
        }
    }
}