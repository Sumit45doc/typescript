import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// DOM type casting
// const anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// class
const invOne = new Invoice("Sumit", "work on the sumit web", 50000);
const invTwo = new Invoice("Sohan", "work on the sohan web", 20000);
// only push object of particular class
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invOne) 
// console.log(invTwo)
// console.log(invoices);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });
// interfaces
// interface Person {
//     name: string;
//     age: number;
//     speak: (a: string) => void;
//     spend: (a: number) => number;
// };
// const me: Person = {
//     name: "Sumit kumar sharma",
//     age: 10,
//     speak(msg) {
//         console.log(msg);
//     },
//     spend(num) {
//         console.log(num);
//         return num
//     }
// };
// console.log(me.speak("Hello tsc. Loving you so much"));
// generics
// const addUID = <T extends {age: number}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// }
// let docOne = addUID({ name: 'sumit', age: 2 });
// console.log(docOne.name);
// interface Resource<T> {
//     uid: number;
//     ResourceName: string;
//     data: T;
// }
// const docTwo: Resource<{age: number}> = {
//     uid: 2,
//     ResourceName: 'person',
//     data: {age: 4}
// }
// const docThree: Resource<string> = {
//     uid: 2,
//     ResourceName: 'person',
//     data: 'shooping complex'
// }
// tuples
// let tup: [string, number, boolean] = ['sumit', 40, true];
// tup[0] = "sharma";
