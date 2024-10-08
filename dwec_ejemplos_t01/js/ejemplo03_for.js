const person = {
    fname:"John", 
    lname:"Doe", 
    age:25
}; 
const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
for (let x in person) {
    txt1 += person[x] + " ";
}
let txt2 = "";
for (let x in numbers) {
    txt2 += numbers[x];
}
console.log(txt1);
console.log(txt2);

let txt3 = "";
//! for (let x of person) { No se puede hacer porque person no es iterable
for (let x of Object.values(person)) {
    txt3 += x + " ";
}
let txt4 = "";
for (let x of numbers) {
    txt4 += x;
}
console.log(txt3);
console.log(txt4);

const cad = "W3Schools";

let txt5 = "";
for (let x in cad ) {
    txt5 += cad[x] + " ";
}

let txt6 = "";
for (let x of cad ) {
    txt6 += x + " ";
}

console.log(txt5);
console.log(txt6);