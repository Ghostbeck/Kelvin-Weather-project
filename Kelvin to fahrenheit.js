//temperature in kelvin
const kelvin = 283;
//kelvin to celsius
let celsius = kelvin - 273;
//celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//to round the value to fahrenheit
Math.floor(fahrenheit);
//celsius to newton
newton = celsius*(33/100);
Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);