// Sample JavaScript Code

let variable1;
let variable2 = variable1  || 'bar';
console.log(variable2 === 'bar'); // Prints true

variable1 = 'foo';
variable2 = variable1  || 'bar';
console.log(variable2); // Prints foo