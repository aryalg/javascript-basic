// 1. string
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

console.log('---Boolean---');
console.log(true);
let javascriptIsFun = true;
//Camel Case Notation
console.log(javascriptIsFun);

console.log('\n---typeof---');
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 10);
console.log(typeof 'Achiever Groups');
//to create a string you can use either double quote or single quote but don't do "Hello'

console.log('\n---Dynamic Typing---');
javascriptIsFun = 'Achiever Groups';
//no need to use let again
console.log(typeof javascriptIsFun);

console.log('\n---Undefined---');
let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);
