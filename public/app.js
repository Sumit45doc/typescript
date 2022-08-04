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
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("Sumit", "work on the sumit web", 50000);
const invTwo = new Invoice("Sohan", "work on the sohan web", 20000);
// only push object of particular class
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invOne)
// console.log(invTwo)
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
;
const me = {
    name: "Sumit kumar sharma",
    age: 10,
    speak(msg) {
        console.log(msg);
    },
    spend(num) {
        console.log(num);
        return num;
    }
};
console.log(me.speak("Hello tsc. Loving you so much"));
