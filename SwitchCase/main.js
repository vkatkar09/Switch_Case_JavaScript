let month = 5;
let message = null;

switch (month) {
  case 1: message = "January"; 
    break;

  case 2: message = "February";
    break;

  case 3: message = "March";
    break;

  case 4: message = "April";
    break;

  case 5: message = "May";
    break;

  case 6: message = "June";
    break;

  case 7: message = "July";
    break;

  case 8: message = "August";
    break;

  case 9: message = "September";
    break;

  case 10: message = "October";
    break;

  case 11: message = "November";
    break;

  case 12: message = "December";
    break;

  default:
    message = "The given month must be between 1 to 12";
    break;
}

console.log(message);
