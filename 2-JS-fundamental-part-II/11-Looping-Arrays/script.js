const friends = [
  'Riya',
  'Sital',
  1991,
  '23',
  '25',
  ['Anita', 'Ramesh'],
  true
];

const type = [];
for (let i =0; i < friends.length; i++) {
  console.log(friends[i]);
  // type[i] = typeof friends[i];

  type.push(typeof friends[i]);
}
console.log(type);

const years = [1991, 1987, 2001, 2007, 2020];
const ages = [];
for (i=0; i < years.length; i++) {
  ages[i] = 2021 - years[i];
}
console.log(ages);

// continue and break
for (let i =0; i < friends.length; i++) {
  
  if(typeof friends[i] != 'string') continue;
  console.log(friends[i]);
  
}

console.log('----Break----')
for (let i =0; i < friends.length; i++) {
  
  if(typeof friends[i] === 'number') break;
  console.log(friends[i]);
  
}