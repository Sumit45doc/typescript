"use strict";
// DOM type casting
// const anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href);
// const form = document.querySelector('.new-item-form')  as HTMLFormElement;
// console.log(form.children);
// const type = document.querySelector('#type') as HTMLSelectElement;
// const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log({ type: type.value });
// })
// class
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
var invOne = new Invoice("Sumit", "work on the sumit web", 50000);
var invTwo = new Invoice("Sohan", "work on the sohan web", 20000);
// only push object of particular class
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invOne)
// console.log(invTwo)
// console.log(invoices);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
