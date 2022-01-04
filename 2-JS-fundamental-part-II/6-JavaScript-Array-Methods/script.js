const friends = ['Abhilekh', 'Rupak', 'Saraswati'];
//////////////////////////////////////////////
// 1. PUSH METHODS
friends.push('Sarala');
// const newLength = friends.push('Sarala');
console.log(friends);

//////////////////////////////////////////////
// 2. UNSHIFT METHODS
friends.unshift('Ayush');
//const newLength = friends.unshift('Rupak');
console.log(friends);

//////////////////////////////////////////////
// 3. POP METHODS
// friends.pop();
friends.pop();
// const popped = friends.pop();
// console.log(popped);
console.log(friends);

//////////////////////////////////////////////
// 4. Shift METHOD
friends.shift();
console.log(friends);

//////////////////////////////////////////////
// 5. POSITION OF ELEMENT IN ARRAY
console.log(friends.indexOf('Rupak'));
// console.log(friends.indexOf('Ayush'));

//////////////////////////////////////////////
// 6. MODERN POSITION METHOD
console.log(friends.includes('Rupak'));
console.log(friends.includes('Ayush'));

//////////////////////////////////////////////
// 7. EXERCISE
friends.push(23);
console.log(friends);
console.log(friends.includes('23'));
// Strict equality. No type coercion.

//////////////////////////////////////////////
// 8. EXERCISE
if (friends.includes('Rupak')) {
  console.log('You are friend with Rupak !');
}
// Used for conditional operatorconst friends = ['Abhilekh', 'Rupak', 'Saraswati'];
//////////////////////////////////////////////
