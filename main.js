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


let number = prompt("Введіть тризначне число:");

let firstDigit = Math.floor(number / 100); 
let secondDigit = Math.floor((number % 100) / 10); 
let thirdDigit = number % 10; 

if (firstDigit === secondDigit && secondDigit === thirdDigit) {
  alert("Всі цифри однакові.");
} else if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
  alert("Є однакові цифри.");
} else {
  alert("Цифри різні.");
}


