// let toPerson: string;
// toPerson = 'sumit kumar sharma';
// const elem = document.getElementById('enter') as HTMLDivElement;
// elem.innerText = toPerson;


// const circ = (diameter: number, circumference?: number): number => {
//     if(circumference) return circumference
//     return diameter * Math.PI;
// }


// console.log(circ(5, 2))

// types
// boolean
// number
// string
// object



// array

// const num: number[] = [2, 3, 5];
// num.push(5);
// num[0] = 5;
// console.log("num ", num);

// const str: string[] = ["apple", "ball"];
// str.push("coconut");
// console.log("str ", str);

// const selectedType: (string | number)[] = ["str", 5];
// selectedType.push("boolean or other type not allowed");
// console.log("selectedType ", selectedType);

// const mix: any[] = ["all", "mixed", 5];
// mix.push(true);
// console.log("mix ", mix);


// object

// type myDetailType =  {
//     name: string,
//     address: string,    
//     district: string,
//     state: string,
//     country: string,
//     landmark?: string,
//     addressList?: string[],
//     obj?: {address1: string}
// }

// const myDetails: myDetailType = {
//     name: "sumit kr sharma",
//     address: "shivaji park",
//     district: "East",
//     state: "Pune",
//     country: "India"
// }

// myDetails.name = "Sohan patel";
// myDetails.landmark = "school";
// myDetails.addressList = ["asd"];
// myDetails.obj = { address1: "asd" };
// console.log(myDetails);

let greet: Function;
greet = () => {
    console.log('function');
}

greet()


const add = (a: number, b: number): void => {
    console.log(a + b)
}

add(1, 1);