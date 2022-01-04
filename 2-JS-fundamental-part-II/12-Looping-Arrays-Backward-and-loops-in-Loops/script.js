const friends = [
  'Riya',
  'Sital',
  1991,
  '23',
  '25',
  ['Anita', 'Ramesh'],
  true
];

// Looping Backward
for (let i = friends.length - 1; i >= 0; i--) {
  console.log(i, friends[i]);
}

// Loop inside loop
for (let i = 1; i < 4; i++) {
  console.log(`----Starting main exercise ${i} 🏋️`)
  for(let j = 1; j < 6; j++) {
    console.log(`Lifting weight exercise ${j}`)
  };
}