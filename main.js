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


function userInformation() {
  let yearOfBirth = prompt("What is your year of birth?");

  if (yearOfBirth === null) {
    alert("Unfortunately, that you didn't want to enter your year of birth.");
    return;
  }



  let city = prompt("In which city do you live?")

  if (city === null) {
    alert("Unfortunately, that you didn't want to enter your city.");
    return;
  }



  let sport = prompt("What is your favorite sport?");

  if (sport === null) {
    alert("Unfortunately, that you didn't want to enter your favorite sport.");
    return;
  }



  let currentYear = new Date().getFullYear();
  let age = currentYear - yearOfBirth;


  let cityMessage;
  if (city.toLowerCase() === "kyiv"){
    cityMessage = "You live in the capital of Ukraine"
  } else  if (city.toLowerCase() === "london"){
    cityMessage = "You live in the capital of Great Britain"
  } else  if (city.toLowerCase() === "washington"){
    cityMessage = "You live in the capital of USA"
  } else {
    cityMessage = `You live in ${city}`;
  }

  


  let sportMessage;
  if (sport.toLowerCase() === "football") {
    sportMessage = "Do you wanna be like Messi?"
  } else if (sport.toLowerCase() === "bascketball"){
    sportMessage = "Do you wanna be like Jordan?"
  } else if (sport.toLowerCase === "box") {
    sportMessage = "Do you wanna be like Tyson?"
  } else {
    sportMessage = `Nice, you like ${sport}.`;
  }



  alert(`You are ${age}year old. \n${cityMessage}. \n${sportMessage}`)

}

userInformation();