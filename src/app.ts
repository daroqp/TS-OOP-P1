import { Account } from "./class/Account";
import { Person } from "./class/Person";
import { YoungAccount } from "./class/YoungAccount";

const person = new Person('Daro', 42, 34198774);
const account = new Account(person, 500);
const youngAcc = new YoungAccount(account, 5);

account.showAccount();
console.log();
account.deposit(500);
account.showAccount();

console.log();
account.retire(300);
account.showAccount();

console.log(youngAcc.isValidAccountHolder());
console.log(youngAcc.getPercBonus);
youngAcc.retire(200);
youngAcc.showAccount();

