'use strict';

const friend1 = 'Anjila';
const friend2 = 'Riya';
const friend3 = 'Sital';

const friends = ['Anjila', 'Riya', 'Sital'];
console.log(friends[2]);

// another way of declaring array is using array syntax
// const friends = new Array('Anjila', 'Riya', 'Sital');
// bracket is literal syntax in array

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[1] = 'Pujan';
console.log(friends);

// friends = ['Anjil', 'Riy', 'Sita'];

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const year = [2001, 1991, 2005, 2015];

const age1 = calcAge(year[0]);
// console.log(age1);

const age2 = calcAge(year[year.length - 1]);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[3]),
];
console.log(ages);
