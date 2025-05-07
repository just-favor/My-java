//Global and local variables

//global variables

let bigName = "John Wick";

function myName() {
    console.log(bigName);
}
myName();


//local variables
function fullName() {
    let name = "John Ogbewe";
    console.log(name);
}
fullName();
// converting from celsius to fahrenheit


function celsius (c){
    let celsius = (c * 9/5) + 32;
    console.log(celsius);
}
celsius(10);




//loops//
//loops are used to iterate over a block of code a number of
//  times as long as the condition is true
//for loop
for (let i = 0; i < 30; i++){
    console.log(`Favour is ${i} years old`);
}

for(let i = 2; i<= 2; i++){
    for (let j = 1; j <= 2; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//
let cars = ["toyota", "honda", "mercedes", "ford", "nissan"];
cars.forEach((cars, index) => {
console.log(`${index + 1} ${cars}`);})

cars.map((cars) => {
    console.log(cars);
})