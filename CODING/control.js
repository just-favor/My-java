// controlflow determines the direction your code takes whether certain block should run or be skipped
// if statements
let age = 18;
if (age < 18) {
    console.log("YOU ARE NOT OF AGE");
}
else{
    console.log("SENIOR MAN")
};

let score = 39
if (score >= 70) {
    console.log("A")
}
else if (score >= 60) {
    console.log("B")
}
else if (score >= 50) {
    console.log("C")
}
else if (score >= 40) {
    console.log("D")
}
else{
    console.log("FAILED")
};

function calculate(boys, girls,){
    console.log(`The number of boys and girls are ${boys + girls} `)
}
calculate( 20 , 25)


//arrow function
const add = () => {
    return a + b;
}

console.log('hello')
console.log('My Name is John Wick')

document.getElementById('myh1').textContent = 'Hello'
document.getElementById('myp').textContent = 'My Website'

//to get a datatype we use the (typeof).
let myAge = 25;
let myName = 'Favour'
console.log(typeof myAge)
console.log(typeof myName)
//incrementing using ++ or  decrementing using --
myAge++ ;

console.log(myAge)

//acepting user input
//let userName = window.prompt('Whats Your Name');
//let topHeader = userName;
//document.getElementById('myh4').textContent = topHeader;

function action(){
    let userName = document.getElementById('input').value;
    document.getElementById('myh4').textContent = userName;
}

//datatypeconversion
let a, b, c;
a = 'man';
b = 'man';
c = 'man';

a = String(a);
b = Number(b);
c = Boolean(c);

console.log(a, typeof a)
console.log(a, typeof b)
console.log(a, typeof c);

//formula for radius

document.getElementById('p2').textContent = 'Calculate for radius of a circle';
function circle(){
    let pi = 3.14;
    let radius = document.getElementById('radius').value;
    let total = 2 * pi * radius;
    document.getElementById('p3').textContent = `The radius of the circle is ${total}cm`;
}

//counter program

    let countLabel = document.getElementById('numb');
    let count = 0;

function addition() {
    count++
    countLabel.textContent = count
}

function reset() {
    count = 0;
    countLabel.textContent = count
}

function subtract() {
    count--
    countLabel.textContent = count
}
//Random number Generating
const min = 1;
const max = 100;

function row(){
    let random = Math.floor(Math.random() * max) + min;
    document.getElementById('row').textContent = random
}

//logical operators
//logical operators are used to combine two or more conditions
//logical operators are &&, || and !
let x = 5;
let y = 10;
if (x < 10 && y > 5) {
    console.log("Both conditions are true");
}
if (x < 10 || y > 15) {
    console.log("At least one condition is true");
}
if (!(x > 10)) {
    console.log("Condition is false");
}

//while loop




