// var myAge = 26;
// var yourAge = 40;

// console.log("I am " + myAge + " years old.");
// console.log("You are " + yourAge + " years old.");

// var x = 5;
// var y = 12;
// var z = x + y; //17

// console.log(z); //17

// z++; // z = z + 1
// // z = z - 1 <=> z--
// console.log(z); // 18

// z = z + 5; // z *= 5

// console.log(6 >= 6);
// var x;
// console.log(x);
// console.log(Boolean(x));

// var x = 5;
// console.log(Boolean(x));
// console.log(!!x);
// function BMI(weight, height) {
//   if (30 > weight || weight > 300) return "Weight must be in Kg";
//   if (1 > height || height > 3) return "Height must be in Meter";
//   var bmi = weight / (height * height);
//   return bmi;
// }

// var weight = prompt("Give your weight in Kg");
// weight = parseFloat(weight);

// var height = prompt("Give your height in Meter");
// height = parseFloat(height);

// var bmi = BMI(weight, height);

// if (typeof bmi == "number") {
//   if (bmi <= 18.5) {
//     alert("Underweight");
//   } else {
//     if (bmi > 18.5 && bmi <= 24.9) {
//       alert("Normal weight");
//     } else {
//       if (bmi > 24.9 && bmi <= 29.9) {
//         alert("Overweight");
//       } else {
//         if (bmi > 29.9) {
//           alert("Obese");
//         } else {
//           alert("Wrong values");
//         }
//       }
//     }
//   }
// } else {
//   alert(bmi);
// }

// function salaryWithBonus(salary, bonus, unit) {
//   if (bonus) {
//     return salary * 10 + unit;
//   } else {
//     return salary + unit;
//   }
// }

// console.log(salaryWithBonus(100, false, "$")); // => 100$
// console.log(salaryWithBonus(100, false, "DZD")); // => 100DZD

// function initials(firstName, lastName) {
//   var first = firstName[0].toUpperCase();
//   var last = lastName[0].toUpperCase();
//   return first + "." + last;
// }

// console.log(initials("moussaoui", "akram")); // => M.A

// if (bmi <= 18.5) {
//   alert("Underweight");
// }
// if (bmi > 18.5 && bmi <= 24.9) {
//   alert("Normal weight");
// }
// if (bmi > 24.9 && bmi <= 29.9) {
//   alert("Overweight");
// }
// if (bmi > 29.9) {
//   alert("Obese");
// }

// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")
// console.log("Bonjour")

// var i = 0;
// do{
//   console.log("Bonjour")
//   i = i + 1
// }while(i < 10)

// var i = 0; => initialisation
// while (i < 10) => condition
// {
//   console.log("Bonjour");
//   i = i + 1; => increment
// }

// function tableMult(num) {
//   for (var i = 1; i < 11; i = i + 1) {
//     console.log(i + " * " + num + " = " + i * num);
//   }
// }

// tableMult(20);

// var nombre = [25, true, 89, "fyfuuyfy"];
// //            0   1     2   3
// console.log("Nombre", nombre);
// console.log("premier", nombre[0]);
// console.log("dernier", nombre[nombre.length - 1]);
// console.log("milieu", nombre[Math.round((nombre.length - 1) / 2)]);

// function xExist(arr, x) {
//   var resultat = arr.includes(x);
//   return resultat;
// }
// var a = ["h", 5, false];
// console.log(xExist(a, 8));

// var countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// var countriesLength = [];
// var countriesLetters = [];
// var countriesFinal = [];
// for (var i = 0; i < countries.length; i++) {
//   countriesLength.push(countries[i].length);
// }

// console.log(countriesLength);

// for (var i = 0; i < countries.length; i++) {
//   countriesLetters.push(countries[i].substring(0, 3).toUpperCase());
// }

// console.log(countriesLetters);
// console.log(countries);

// for (var i = 0; i < countries.length; i++) {
//   countriesFinal.push([countries[i], countriesLetters[i], countriesLength[i]]);
// }

// console.log(countriesFinal);

// var arr = ["akram", 45, true];
// //         0        1   2
// arr.unshift(8); // arr[0] => 8
// arr.push(8); // arr[0] => "akram"
// var obj = {
//   prenom: "akram",
//   age: 45,
//   isHere: true,
// };

// console.log("obj avant : ", obj);

// delete obj.isHere;

// console.log("obj apres : ", obj);

// var countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
//
// for (var i = 0; i < countries.length; i = i + 1) {
//   console.log(countries[i]);
// }
// console.log("-----------------------------");
// for (var value of countries) {
//   console.log(value);
// }
// for (var i = 0; i < countries.length; i = i + 1) {
//   console.log(i);
// }
// console.log("-----------------------------");
// for (var value in countries) {
//   console.log(value);
// }
var users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Akram: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Python",
      "C",
      "C++",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

var values = Object.values(users);
var keys = Object.keys(users);
var min = values[0].skills.length;
var position = 0;
for (var i = 0; i < values.length; i++) {
  if (min > values[i].skills.length) {
    min = values[i].skills.length;
    position = i;
  }
}

console.log("user = ", keys[position]);
