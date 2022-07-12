let i = 0;
while (i < 15) {
  i++;
  console.log(i);
}
console.log("HERE-----------------");

let newVal = 1;
let counter = 0;
while (counter < 20) {
  counter++;
  newVal += +counter;
}
console.log(newVal);

console.log("NEXT");

do {
  console.log("The number is", i);
  i++;
} while (i < 20);
