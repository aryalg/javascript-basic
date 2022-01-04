// Advanced if else statement

let day = 'thursday';

switch(day) {
  case 'sunday':
  console.log("I plan activities for this week");
  console.log("Go to workshops session");
  break;

  case 'monday':
  console.log("It's monday.")
  break;

  case 'tuesday':
  case 'Wednesday':
  console.log("Tuesday and Wednesday are workind days");
  break;

  case 'thursday':
  console.log("Thursday is Thors day!!");
  

  case 'friday':
  case 'saturday':
  console.log("It's holiday time!");
  break;

  default:
  console.log("Not a week day");
  break;
}

//What happens if we remove break?
//implement using if else