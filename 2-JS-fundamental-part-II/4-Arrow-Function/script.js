'use strict';

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

// console.log(calcAge(2000));

const calcAge1 = birthYear1 => 2021 - birthYear1;
console.log(calcAge1(2000));

const marriageCalculator = (birthYear, age) => {
  const age = 2021 -birthYear;
  const marriaegAge = 30 - age;
  return marriaegAge;
}

console.log(marriageCalculator(1992));
