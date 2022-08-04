"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes MRP. " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
