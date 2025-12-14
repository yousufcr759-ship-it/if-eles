var name = prompt("Enter your name");
if (name) {
  alert("Hello " + name);
} else {
  alert("Hello User");
}

var num = prompt("Enter a number");
if (num === "" || num === null) {
  num = 3;
}

document.write("<h2>Table</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

var city = prompt("Enter city");
if (city === "karachi") {
  alert("Welcome to Karachi");
} else {
  alert("Welcome");
}

var gender = prompt("Enter gender");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
} else {
  alert("Invalid gender");
}

var color = prompt("Enter signal color");
if (color === "red") {
  alert("Stop");
} else if (color === "yellow") {
  alert("Ready");
} else if (color === "green") {
  alert("Go");
} else {
  alert("Wrong color");
}

var age = prompt("Enter age");
if (age >= 18) {
  alert("Eligible");
} else {
  alert("Not Eligible");
}

var fuel = prompt("Enter fuel in litres");
if (fuel < 0.25) {
  alert("Refill fuel");
} else {
  alert("Fuel OK");
}
