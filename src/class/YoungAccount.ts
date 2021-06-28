import { Account } from "./Account";

export class YoungAccount extends Account {

    constructor(private account: Account, private percBonus: number){
        super(account.getAccountHolder, account.getAmount);
    }

    get getPercBonus():number {
        return this.percBonus;
    }
    set setPercBonus(percBonus: number){
        this.percBonus = percBonus;
    }

    showAccount(){
        console.log(`YOUNG ACCOUNT\nName: ${this.account.getAccountHolder.getName}\nBof: %${this.percBonus}`)
    }

    isValidAccountHolder(): boolean{     
        return this.account.getAccountHolder.getAge < 25 && this.account.getAccountHolder.esMayorDeEdad()
    }

    retire(amount: number):void {
        if(this.isValidAccountHolder()){
            this.setAmount -= amount;
            console.log(`Se retiro ${amount}`)
        }else{
            console.log(`No sos joven`)
        }
    }
}