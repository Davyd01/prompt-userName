// function calculateBirthYear() {
//   let currentYear = prompt("What is it year now?");
//   let age = prompt("How old are you?");
//   let birthYear = currentYear - age;
//   alert("Your year of birth:" +  birthYear);
// }
// calculateBirthYear(); 


// let number = Number(prompt("Fill the number please"));
// let message = '';

// if (number > 0) {
//   message = '1';
// } else if (number < 0) {
//   message = '-1';
// } else {
//   message = '0';
// }

// console.log(message);

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log('ви скасували');
    break;
  
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;

  case isNaN(+numOrStr):
    console.log('number is Ba_NaN');
    break;

  default:
    console.log('OK!');
}

