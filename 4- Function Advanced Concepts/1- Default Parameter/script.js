'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('NA540');
// console.log(bookings);

function destructedDefaults({ foo = 'default' } = {}) {
  return foo;
}

console.log(destructedDefaults());
