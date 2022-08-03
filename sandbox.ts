let toPerson: string;
toPerson = 'sumit kumar sharma';
const elem = document.getElementById('enter') as HTMLDivElement;
elem.innerText = toPerson;


const circ = (diameter: number, circumference?: number): number => {
    if(circumference) return circumference
    return diameter * Math.PI;
}


console.log(circ(5, 2))

// types
// boolean
// number
// string
// object