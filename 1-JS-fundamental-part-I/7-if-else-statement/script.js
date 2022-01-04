const age = 10;
const oldEnough = age >= 14;

if(oldEnough) {
  console.log("You are qualified for SEE Examination! 🎓😀")
} else { 
  const yearsLeft = 14 - age;
  console.log(`You have to wait ${yearsLeft} years to give your SEE examination.`)
}

// Guess the output here
// const birthYear = 1991;
// if(birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }

// console.log(`You are born in ${century}th century`);

// const birthYear = 1991;
// let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

// console.log(`You are born in ${century}th century`);