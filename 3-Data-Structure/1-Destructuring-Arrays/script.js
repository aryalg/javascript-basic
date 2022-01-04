// unpacking data into separate variables
// ES 6 feature
// We will simulate food delivery application

const restaurant = {
  name: 'Pepe Pizza',
  location: 'Tripureshwor',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  startermenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 7. Application: Function return an array
  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// 1. Without destructing
console.log('---Without destructing---');
const arr = [1, 2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// 2. With destructuring
console.log('\n---With destructing---');
const [x, y, z] = arr;
console.log(arr);
console.log(x, y, z);

// 3. Original array not changed or destracted
console.log('\n---Original array not changed or destracted---');
console.log(arr);

// 4. lets take some element of object above
console.log('\n---Lets take some element of object above---');
const [first, second] = restaurant.categories;
console.log(first, second);

// 5. If we only want to take first and third Element
console.log('\n---If we only want to take first and third Element---');
let [firstElement, , thirdElement] = restaurant.categories;
console.log(firstElement, thirdElement);

// 6. Application: switch main and secondary categories
// traditional approach
console.log(
  '\n---Application: switch main and secondary categories traditional approach---'
);
const temp = firstElement;
firstElement = thirdElement;
secondary = temp;
console.log(firstElement, thirdElement);
// with destructing
[thirdElement, firstElement] = [firstElement, thirdElement];
console.log(firstElement, thirdElement);

// 7. Application: Function return an array
console.log('\n---Application: Function return an array---');
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// 8. Application: nested Array
console.log('\n---Application: nested Array---');
const nested = [2, 3, [4, 5]];
// destructuring nested array
const [i, , j] = nested;
console.log(i, j);
// retrieving individual elements: destructuring inside destructuring
const [p, , [q, r]] = nested;
console.log(p, q, r);

// 9. Setting default value to variables when extracting
console.log('\n---Setting default value to variables when extracting---');

// if we don't know the nature of an array
// useful while accessing api data
// const [d, e, f] = [8, 9];
// console.log(d, e, f);
const [d = 1, e = 1, f = 1] = [8, 9];
console.log(d, e, f);
