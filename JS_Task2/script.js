//Firs Loop
//----------------------------------------------------

let sum = 0
for (i = 1; i <= 100; i++){
    sum += i;
}
console.log('Numbers from 1 to 100:',sum);

//Second Loop
//----------------------------------------------------

let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

//Third Loop
//----------------------------------------------------

let text = "Hello my name is Pasha";
let counter = 0;

for (let i = 0; i < text.length; i++) {
  counter ++;
}

console.log(counter);

//Fourth Loop
//----------------------------------------------------

let numbers = [93, 2, 8, 88, 1, 105];
let founder = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if ( numbers[i] > founder) {
    founder = numbers[i];
  }
}
console.log (founder);

//Fifth Loop
//----------------------------------------------------

let textRevers = "Hello my name is Pasha";
let revers = "";

for (let i = textRevers.length - 1; i >= 0; i--) {
  revers += textRevers[i];
}
console.log(revers);


//Sixth Loop
//----------------------------------------------------

console.log("Numbers without 10")
for (let i = 1; i <= 20; i++) {
  if (i === 10) continue;
  console.log(i);
}

//Seventh Loop
//----------------------------------------------------

let sum2 = 0;
for (let i = 1; i <= 50; i++){
 if(i % 2 === 0){
  sum2 += i;
}
}
console.log("Numbers sum for 1 til 50:",sum2);

//Eighth Loop
//---------------------------------------------------- !VOPROSIKI
let star = "";

for (let i = 0; i < 4; i++){
 star += "*";
 counter++;
 console.log(star);
}
//Ninth Loop
//---------------------------------------------------- !VOPROSIKI

function drawDiamond(maxStars) {
  let pattern = '';

  for (let i = 1; i <= maxStars; i += 2) {
    pattern += ' '.repeat((maxStars - i) / 2) + '*'.repeat(i) + '\n';
  }
  for (let i = maxStars - 2; i >= 1; i -= 2) {
    pattern += ' '.repeat((maxStars - i) / 2) + '*'.repeat(i) + '\n';
  }
  console.log(pattern);
}


drawDiamond(7);
 
//Tenth Loop
//----------------------------------------------------

let textCheck = "Interestning text without text same words";
let textSpliter = textCheck.split(" ");
let checker = [];
for (let i = 0; i < textSpliter.length; i++) {
  if ( checker.includes(textSpliter[i]) === true) {
    console.log("We have same words in text");
    break;
  }
  else {
    checker.push(textSpliter[i]);
  }
}

if (checker.length === textSpliter.length) {
  console.log("We don't have same words in text");
}

// diamand

