"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountHolder, amount) {
        this.accountHolder = accountHolder;
        this.amount = amount;
    }
    Object.defineProperty(Account.prototype, "getAccountHolder", {
        get: function () {
            return this.accountHolder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setAccountHolder", {
        set: function (accountHolder) {
            this.accountHolder = accountHolder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "getAmount", {
        get: function () {
            return this.amount ? this.amount : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setAmount", {
        set: function (amount) {
            this.amount = amount;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.showAccount = function () {
        console.log("Account Holder: " + this.accountHolder.getName + "\nAmount: " + this.amount);
    };
    Account.prototype.deposit = function (amount) {
        if (amount >= 0) {
            this.amount
                ? this.amount += amount
                : this.amount = 0;
        }
    };
    Account.prototype.retire = function (amount) {
        if (this.amount) {
            this.amount -= amount;
        }
    };
    return Account;
}());
exports.Account = Account;
