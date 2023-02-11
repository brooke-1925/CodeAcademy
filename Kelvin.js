// Todays forecast in Kelvin // 
const kelvin = 293;
// Equation to find Celsius //
const celsius = kelvin - 273;
// Equation to find Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
// This displays the temperature //
console.log(`The temperature is ${fahrenheit}.`);