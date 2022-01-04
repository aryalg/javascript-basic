// Unpacking all array elements into one
const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //  functions expression is used inside object to create method.
  order : function(starterIndex, mainIndex) {
      return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  openingHours : {
    thu: {
      open: 12,
      close:22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Orderreceived! ${this.startermenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delevered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Your pasta is ready using ingredients ${ing1}, ${ing2} and ${ing3}`);
  }
};

// Expands an array to all its element in one single array.
// 1. traditional approach
console.log('---Using Traditional Approach---');
const arr = [7, 8, 9];
// Create new array with some new element at beginning
// loop over or do it manually
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// /////////////////////////////////////////////////

// 2. using spread operator
console.log('---Using Spread Operator---');
const goodArr = [1, 2, ...arr];
console.log(goodArr);
// // what happens to original array?
console.log('---Original Array---');
console.log(arr);

// // /////////////////////////////////////////////////

// // 3. what if
console.log('---What if??---');
const newArr = [1, 2, arr];
console.log(newArr);

/////////////////////////////////////////////////

// 4. getting individual elements of array
console.log('---Getting individual elements of array---');
console.log(...goodArr);
// this is similar as
console.log(1,2,7,8,9);
// This is useful to pass multiple elements to function as an argument

/////////////////////////////////////////////////

// // 5. adding another food item to mainMenu inside restaurant object
console.log('---Creating new menu fetching from restaurant object---');
const newMenu = [...restaurant.mainMenu, 'Rice'];
console.log(newMenu);
console.log('---Original Mani Menu inside restaurant object---');
console.log(restaurant.mainMenu);

// spread operator also helps to take elements out of an array like destructuring but it takes all elements out of an array and also doesn't create variable 

// /////////////////////////////////////////////////

// // 6. copying arrays
console.log('---Copying arrays---');
const mainMenuCopy = [...restaurant.mainMenu];

// /////////////////////////////////////////////////

// 7. join two arrays
console.log('---Joining arrays---');
const menu = [...restaurant.startermenu, ...mainMenuCopy];
console.log(menu);

// spread operator not only works in an array but it also works on all iterables. We will talks them later...
// iterables: arrays, strings, maps and sets but not objects

/////////////////////////////////////////////////

// 8. for strings
console.log('---Spread operator for strings---');
const str = 'Achiever';
console.log(...str);
console.log('A','c');
const letters = [...str, '','Groups'];
console.log(letters);

/////////////////////////////////////////////////

// 9. we can't add spread operator inside template literals because template literals doesn't expect multiple values separated by commas. This can be only used when we passed argument in function and when we build new array.
// // console.log(`${...str} Groups`);

/////////////////////////////////////////////////

// 10. lets now make function that utilize spread operator
const ingredients = [prompt('let\'s make pasta! ingredient 1'), prompt('let\'s make pasta! ingredient 2'), prompt('let\'s make pasta! ingredient 3')];
console.log(ingredients);

/////////////////////////////////////////////////

// How to call order pasta function and pass entered ingredients?
// 11. traditional approach
console.log('---Making Pasta using traditional approach---');
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // /////////////////////////////////////////////////

// 12. Using spread operator
// console.log('---Making Pasta using Spread operator---');
restaurant.orderPasta(...ingredients);

/////////////////////////////////////////////////

// 13. Since 2018 spread operator also works on objects although objects are not iterables
console.log('---Spread operator with objects---');
const newRestaurant = {shareHolder: 'Achiever Groups', ...restaurant, established: '2021'};
console.log(newRestaurant);

/////////////////////////////////////////////////

// 14. Copy the object
console.log('---Copying restaurant objects---');
const restaurantCopy = {...restaurant};
console.log(restaurantCopy);

/////////////////////////////////////////////////

// 15. Checking restaurant copy
console.log('---Checking restaurant copy---');
console.log(restaurantCopy.name);
restaurantCopy.name = 'Achiever Groups Pizza';
console.log(restaurantCopy.name);
console.log(restaurant.name);