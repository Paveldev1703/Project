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

// Eleventh Loop
//----------------------------------------------------

tall1 = 10;
tall2 = 20;

let x;
x=tall1;
tall1=tall2;
tall2=x;
console.log("Tall1=",tall1);
console.log("Tall2=",tall2);

//Twelfth Loop
//----------------------------------------------------

function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}
console.log(fibonacci(10));

//Thirteenth Loop
//---------------------------------------------------- 

function primeNumbers(n) {
  let prime = [];
  for (let i = 2; i <= n; i++) {
    if (prime[i]) continue;
    for (let j = i * i; j <= n; j += i) {
      prime[j] = true;
    }
  }
  return prime;
}
console.log(primeNumbers(10));

//14th Loop
//----------------------------------------------------

let sort = [2, 4, 3, 8, 5, 6, 1, 7, 9, 10];

for (let i = 0; i < sort.length; i++) {
  for (let j = i + 1; j < sort.length; j++) {
    if (sort[i] > sort[j]) {
      let temp = sort[i];
      sort[i] = sort[j];
      sort[j] = temp;
    }
  }
}
console.log(sort);