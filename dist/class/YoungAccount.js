"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoungAccount = void 0;
var Account_1 = require("./Account");
var YoungAccount = /** @class */ (function (_super) {
    __extends(YoungAccount, _super);
    function YoungAccount(account, percBonus) {
        var _this = _super.call(this, account.getAccountHolder, account.getAmount) || this;
        _this.account = account;
        _this.percBonus = percBonus;
        return _this;
    }
    Object.defineProperty(YoungAccount.prototype, "getPercBonus", {
        get: function () {
            return this.percBonus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(YoungAccount.prototype, "setPercBonus", {
        set: function (percBonus) {
            this.percBonus = percBonus;
        },
        enumerable: false,
        configurable: true
    });
    YoungAccount.prototype.showAccount = function () {
        console.log("YOUNG ACCOUNT\nName: " + this.account.getAccountHolder.getName + "\nBof: %" + this.percBonus);
    };
    YoungAccount.prototype.isValidAccountHolder = function () {
        return this.account.getAccountHolder.getAge < 25 && this.account.getAccountHolder.esMayorDeEdad();
    };
    YoungAccount.prototype.retire = function (amount) {
        if (this.isValidAccountHolder()) {
            this.setAmount -= amount;
            console.log("Se retiro " + amount);
        }
        else {
            console.log("No sos joven");
        }
    };
    return YoungAccount;
}(Account_1.Account));
exports.YoungAccount = YoungAccount;
