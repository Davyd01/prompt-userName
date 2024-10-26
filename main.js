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


// function userNumber() {
//   let number = Number(prompt("Enter number"))

//   if (number % 2 === 0) {
//     alert(`${number} - Четное число`)
//   } else {
//     alert(`${number} - Нечетное число `)
//   }
// }
// userNumber()


// function userNumbers() {
//   let number = Number(prompt(`Enter number`))

//   if (number > 0) {
//     alert(`${number * 2}`)
//   } else if(number < 0) {
//     alert(`${number + 10}`)
//   } else {
//     alert(`This is zero`)
//   }
// }
// userNumbers()

// function userNumber() {
//   let number = Number(prompt(`Enter number`))

//   let firstDigit = Math.floor(number / 100);
//   let secondDigit = Math.floor((number % 100) / 10);
//   let thirdDigit = number % 10;

//   if (firstDigit >= secondDigit && firstDigit >= thirdDigit) {
//     alert(`${firstDigit} is the biggest one`)
//   } else if (secondDigit >= firstDigit && secondDigit >= thirdDigit) {
//     alert(`${secondDigit} is the biggest one`)
//   } else {
//     alert(`${thirdDigit} is the biggest one`)
//   }
// }
// userNumber();


// function userMath() {
//   let numberOne = Number(prompt(`Enter first number`))
//   let numberTwo = Number(prompt(`Enter second number`))
//   let math = prompt(`Enter a sign(+, -, *, /)`)

//   let result;

//   if (math === "+") {
//     result = numberOne + numberTwo
//   } else if(math === "-") {
//     result = numberOne - numberTwo
//   } else if(math === "*") {
//     result = numberOne * numberTwo
//   } else if(math === "/") {
//     result = numberOne / numberTwo
//   } else {
//     alert("Invalid user operation");
//     return;
//   }
//   alert(`Result: ${result}`)
// }
// userMath()


// function multiTable() {
//   let number = Number(prompt("Write a number from 1 to 9, and I will show you the multiplication table"));

//   if (isNaN(number) || number < 1 || number > 9) {
//     alert("Invalid input. Please enter a number from 1 to 9.");
//     return;
//   }

//   let result = ""; // Создаём пустую строку, чтобы собрать таблицу умножения

//   for (let i = 1; i <= 10; i++) {
//     result += `${number} × ${i} = ${number * i}\n`; // Добавляем каждую строку таблицы умножения
//   }

//   alert(result); // Выводим собранную таблицу умножения
// }

// multiTable();


// function iM() {
//   let name = "David";
//   let age = 24;
//   let city = "Nieuwegein";
//   alert(`Hi my name is ${name}, im ${age} years old, currently i live in ${city}.`)
// }
// iM();



// function userNumber() {
//   let str = Number(prompt("enter number"))
//   alert(`${num * 2}`)
// }
// userNumber()


// function userInfo() {
//   let movie = prompt("Enter your fav movie?");
//   let director = prompt("Who is director?");
//   let year = Number(prompt("Year of issue?"));
//   alert(`Name of the movie "${movie}", directed by ${director}, and it was released in ${year}`)
// }
// userInfo()


// function number() {
//   let firstNum = Number(prompt("Enter a first num"))
//   let secondNum = Number(prompt("Enter a second num"))

//   if (firstNum > secondNum) {
//     alert("The first one is bigger")
//   } else if (secondNum > firstNum) {
//     alert("The second one is bigger")
//   } else {
//     alert("They are equal")
//   }
// }
// number()



// let a = 10;
// let b = ++a;
// console.log(b)
// let c = 10;
// let d = --c;
// console.log(d);


// let num1 = 10;
// let num2 = 3;
// let result1 = num1 + num2;
// let result2 = num1 - num2;
// let result3 = num1 * num2;
// let result4 = num1 / num2;
// let result5 = num1 % num2;
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);



// function userAge() {
//   let age = Number(prompt("Your age?"))
//   if (age >= 18) {
//     alert("accses")
//   } else {
//     alert("no accses")
//   }
// }
// userAge();


// let age2 = 18;
// let message = age2 >= 18 ? `adults` : `teenager`;



// function day() {
//   let dayOfWeek = Number(prompt("Enter a number"))
//   switch (dayOfWeek) {
//     case 1:
//       alert(`Monday`)
//         break
//     case 2:
//       alert(`Tuesday`)
//         break
//         case 3:
//           alert(`Wednesday`)
//             break
//             case 4:
//               alert(`Thursday`)
//                 break
//                 case 5:
//                   alert(`Friday`)
//                     break
//                     case 6:
//                       alert(`Saturday`)
//                         break
//                         case 7:
//                           alert(`Sunday`)
//                             break
//                             default:
//                               alert(`Invalid number`)
//   }
// }
// day()



// function age() {
//   let userName = prompt("What is your name?")
//   let userAge = Number(prompt("How old are you?"));

//   if (userAge >= 18) {
//     alert(`Hi ${userName}, access grante.`)
//   } else if (userAge < 12) {
//     alert(`Hi, ${userName},sorry, but you are so young.`)
//   } else if (userAge >= 12 && userAge < 18) {
//     alert(`Hi, ${userName}, access denied.`)
//   } else {
//     alert(`Invalid user information`)
//   }
// }
// age();




// function multiTable() {
//   let number = Number(prompt("Write a number from 1 to 9, and I will show you the multiplication table"));

//   if (isNaN(number) || number < 1 || number > 9) {
//     alert("Invalid input. Please enter a number from 1 to 9.");
//     return;
//   }

//   let result = ""; // Создаём пустую строку, чтобы собрать таблицу умножения

//   for (let i = 1; i <= 10; i++) {
//     result += `${number} × ${i} = ${number * i}\n`; // Добавляем каждую строку таблицы умножения
//   }

//   alert(result); // Выводим собранную таблицу умножения
// }

// multiTable();



// function number() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${i * i}`);
//   }
// }
// number()


// let i = 1;
// while (i <= 9) {
//   console.log(`${i * i}`)
//   i++;
// }


// let i = 1;
// do {
//   console.log(`${i * i}`);
//   i++;
// } while (i <= 9)


// function number() {
//   let result = "";
//   for (let i = 10; i <= 20; i++) {
//     result += i * i + (i < 20 ? ', ' : '');
//   }
//   console.log(result);
    
// }
// number();



// function number() {
//   let sum = 0;
//   for (let i = 1; i <= 15; i++) {
//     sum += i
//   }
//   console.log(sum)
// }
// number()

// function number() {
//   let sum = 1;
//   for (let i = 1; i <= 4; i++) {
//     sum *= i
//   }
//   console.log(sum)
// }
// number()



// function number() {
//   let sum = 2;
//   for (let i = 1; i <= 500; i++) {
//     console.log(`${i / sum}`)
    
//   }
// }
// number()


// function number() {
//   let sum = 0;
//   for (let i = 1; i <= 500; i++) {
//     sum += i
//   }
//   console.log(sum / 500)
// }
// number()



// function number() {
//   let sum = 0;
//   for (let i = 30; i <= 80; i++) {
//     if (i % 2 == 1) continue;
//     sum += i;
//   }
//   console.log(sum)
// }
// number()


// function number() {
//   for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0)
//     console.log(i)
//   }
// }
// number()



// function number() {
//   for (let i = 2; i <= 10; i++ ) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${j * i}`)
//     }
//   }
// }
// number()





