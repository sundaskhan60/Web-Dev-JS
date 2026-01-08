var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

// Q2. Subtraction of two numbers
var difference = num1 - num2;
document.write(
  "The difference of " + num1 + " and " + num2 + " is " + difference + "<br>"
);

// Q2 Multiplication of two numbers
var product = num1 * num2;
document.write(
  "The product of " + num1 + " and " + num2 + " is " + product + "<br>"
);

// Q2. Division of two numbers
var division = num1 / num2;
document.write(
  "The division of " + num1 + " by " + num2 + " is " + division + "<br>"
);

// Q2. Modulus of two numbers
var modulus = num1 % num2;
document.write(
  "The modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>"
);

var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

// Q4
var ticketPrice = 600;
var noOfTicekts = 5;
var cost = ticketPrice * noOfTicekts;

document.write(
  "Total cost to buy tickets  " +
    noOfTicekts +
    " to a movie is " +
    cost +
    " PKR"
);

var num = 4;

document.write("<h2>Multiplication Table of " + num + "</h2>");

document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br>");

//Q6
var celsius = 25;
var fahrenheitFromC = (celsius * 9) / 5 + 32;
document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");
var fahrenheit = 70;
var celsiusFromF = ((fahrenheit - 32) * 5) / 9;
document.write(fahrenheit + "°F is " + celsiusFromF + "°C");

// Q7. Shopping Cart Checkout

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost =
  priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("Total cost of your order is " + totalCost + " PKR");

//Q8
var total_marks = 980;
var student_marks = 804;
var percentage = (student_marks / total_marks) * 100;
document.write("<h1>Student Percentage</h1>");
document.write("Total Marks: " + total_marks + "<br>");
document.write("Marks Obtained: " + student_marks + "<br>");
document.write("Percentage: " + percentage + "%");

//Q9
var totalPKR = 10 * 104.8 + 25 * 28;

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR);

//Q10
var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("<h1>Arithmetic Operations Result</h1>");
document.write("Initial number: " + num + "<br>");
document.write(
  "Result after adding 5, multiplying by 10, and dividing by 2: " + result
);

//Q11
var currentYear = 2026;
var birthYear = 2002;
var age1 = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("current year:" + currentYear);
document.write("birthyear:" + birthYear);
document.write("your age is" + age1);

//Q12
var radius = 7;
var pi = 3.142;

var circumference = 2 * pi * radius;
document.write("The circumference is " + circumference + "<br>");

var area = pi * radius * radius;
document.write("The area is " + area);

//Q13
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("<h1>Lifetime Supply Calculator</h1>");
document.write(
  "You will need " +
    totalNeeded +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge
);
