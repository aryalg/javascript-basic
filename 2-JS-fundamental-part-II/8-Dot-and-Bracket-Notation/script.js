const friends = {
  firstFriend : 'Riya',
  secondFriend : 'Sital',
  age1 : '23',
  age2 : '25',
  otherFriends : ['Anita', 'Ramesh']
};

// console.log(friends);

//////////////////////////////////////////////
// 1. Getting property
// console.log(friends.otherFriends);
// console.log(friends['firstFriend']);
// console.log(friends.firstFriend);

//////////////////////////////////////////////
// 2. EXERCISE
const nameKey = 'Friend';
console.log(friends['first' + nameKey]);
// We can't calculate explicitly

// const allFriends = prompt('Who are your other friends?')
// // console.log(friends[allFriends]);
// if (friends[allFriends]) {
//   console.log(friends[allFriends]);
// } else {
//   console.log('You have entered wrong request.');
// }

// friends.newFriend = 'Priya';
// friends['leader'] = 'Anita';
// console.log(friends);


// I have 2 other friends and my best friend is Anita
// console.log(`I have ${friends.otherFriends.length} other friends and my best friend is ${friends.otherFriends[0]}`);
// See operator precedence for . and []