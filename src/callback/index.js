function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
  return sumNumbers(num1, num2);
}

console.log(calc(5, 5, sum));

setTimeout(function () {
  console.log("Hola Tompi");
}, 2000);

function greeting(name) {
  console.log(`Hola ${name} como estas? `);
}

setTimeout(greeting, 2000, "Tomas Felipe");
