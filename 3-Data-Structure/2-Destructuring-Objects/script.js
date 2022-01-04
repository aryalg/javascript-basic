// unpacking data into separate variables
// ES 6 feature
// We will simulate food delivery application

const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // 1. Adding opening hour object
  openingHours: {
    thu: {
      open: 12,
      close: 22,
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

  // 6. Passing object as function argument
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.startermenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delevered to ${address} at ${time}`
    );
  },
};

// 1. lets take out name categories and opening hour of this restaurant object
// we will use {} for object destructuring
// variable name should exactly match the property name
// in object order of element doesn't matter like in array
const { openingHours, categories, name } = restaurant;
console.log(openingHours);

// 2. if variable name is different from property name
const { name: resName, openingHours: hours, categories: items } = restaurant;
console.log(resName, hours, items);

// // 3. default value
const { menu = [], startermenu: starter = [] } = restaurant;
console.log(menu, starter);
console.log(restaurant);
// original object not changed

// 4. mutating variables
let a = 10;
let b = 100;
const obj = { a: 23, b: 3, c: 7 };
// js identifies {} as code blocks
({ a, b } = obj);
console.log(a, b);

// 5. Nested Object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// assigning different variable
const {
  fri: { open: opening, close: closing },
} = openingHours;
console.log(opening, closing);

// 6. Passing object as function argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Putalisadak, Kathmandu, Nepal',
  mainIndex: 2,
  starterIndex: 2,
});
// calling with default values
restaurant.orderDelivery({
  address: 'Putalisadak, Kathmandu, Nepal',
  starterIndex: 2,
});
