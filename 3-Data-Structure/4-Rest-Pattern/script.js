// opposite of Spread Operator
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
  },

  orderPizza: function(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient); 
  }
};

// 1. Spread Operator
console.log('---Spread Operator---');
const arr = [1,2, ...[3,4]];
console.log(arr);

// /////////////////////////////////////////////////

// 2. We use rest pattern of left side like destructuring. Syntax is same of spread operator
// lets combine rest pattern with destructuring
console.log('---Lets combine rest pattern with destructuring---');
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(other);

/////////////////////////////////////////////////

// 3. ... in both side of assignment operator. using destructor and rest pattern at the same time.
console.log('---Using destructor and rest pattern at the same time---')
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.startermenu];
console.log(pizza, risotto, otherFood);

/////////////////////////////////////////////////

// 4. Using rest pattern in objects
console.log('---Using rest pattern in objects---')
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);    

/////////////////////////////////////////////////

// 5. Function
// console.log('---Using rest pattern with function---');

const add = function(...numbers) {
  // ...number above is rest parameter
  console.log(numbers);
  let sum = 0;
  for(let i=0; i < numbers.length; i++) {
    sum += numbers[i]; 
  }
  console.log(sum);
}



// [2, 3]

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 5, 3, 7, 2);
const x = [23, 4, 17];
add (2, 3, ...x);

/////////////////////////////////////////////////

// 6. Collecting arguments in restaurant object
console.log('---Collecting arguments in restaurant object---')
restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');
// if nothing passed, collected as empty array.
restaurant.orderPizza('mushroom');