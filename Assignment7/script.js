
// QUESTION 1 
for(let i=1;i<=10;i++){
  console.log(i)
}
console.log("***************backward*********************")
// QUESTION 2
for(let i=10;i>=1;i--){
  console.log(i)
}
//Question 3
console.log("****************even numbers********************")

for(let i=1;i<=20;i++){
  if(i%2==0){
    console.log("even num between 1 to 20 ",i)
  }
}
console.log("****************odd numbers*****************");


//Question4
for(let i=1;i<=20;i++){
  if(i%2!==0){
    console.log("odd num between 1 to 20 ",i)
  }
}
console.log("*************multiple of 2******************");

//Question 5 multiple of 2

for(let i=1;i<=10;i++){
  console.log("2 x ",i, " = ",(2*i))
}

// question 5
console.log("************mul of**********************");

for(let i=1;i<=10;i++){
  console.log("5 x ",i," = ",(5*i))
}

// question 6 nested loop

for(let i=1;i<=5;i++){
  let line="";
  for(let j=1;j<=i;j++){
    line=line+"*"
  }
  console.log(line)
}