// question 1
let a = 10;

console.log("the value of a is :", a);
++a;

console.log("the value of ++a is:", a);
console.log("now the value of a is :", a);

console.log("the value of a++ is", a);
a++;
console.log("now the value of a is :", 12);

--a;
console.log("The value of --a is:", a);
console.log("now the value of a is :", a);

console.log("the value of a -- is :", a);

a--;
console.log("now the value of a is :", a);

// Question 2
// console.log("question 2 ----");
// var a=2,b=1;
// var result=--a - --b + ++b + b--;
// console.log("result of a is ",a);
// console.log("result of b is ",b);
// console.log("result",result);

// Question 3
console.log("question 3 -----");

let person = prompt("please enter your name");
console.log("hello ", person);
alert("hello " + person);

// Question 4
console.log("question 4 -----");

let num = prompt("enter a number");

if (num === null) {
  num = 5;
} else {
  num = Number(num);
}

for (let i = 1; i <= 10; i++) {
  console.log(num, "x", i, "=", num * i);
}

// Question 5
console.log("question 5 -----");
let subject1 = prompt("enter subject1");
let subject2 = prompt("enter subject2");
let subject3 = prompt("enter subject3");
let total_marks = 100;

let marks1 = Number(prompt("enter 1st subject marks"));
let marks2 = Number(prompt("enter 2nd subject marks"));
let marks3 = Number(prompt("enter 3rd subject marks"));

let percentage1 = (marks1 / total_marks) * 100;
let percentage2 = (marks2 / total_marks) * 100;
let percentage3 = (marks3 / total_marks) * 100;

console.log(subject1 + " percentage: " + percentage1 + "%");
console.log(subject2 + " percentage: " + percentage2 + "%");
console.log(subject3 + " percentage: " + percentage3 + "%");
