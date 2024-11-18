// First funcion.  
//----------------------------------------------------

const name = "Pasha";
console.log(name);
function sum(a, b) {
    return a + b;
  }


// Second function
// ---------------------------------------------------
function yearsOld(birthyear){
    const today = 2024;
    const age = today - birthyear;
    return `I am ${age} years`;
      
}
 console.log(yearsOld(2000));

 // Third function 
 // --------------------------------------------------

 let number = 0

 function checker(number){
    if (number == 0){
        return "This is zero";
    }
    else {
    if (number > 0){
        return "Number more then zero";
    }
    if (number < 0){
        return "Number less then zero or negative";
    }
    }
 }

 console.log(checker(2));

 // Fourth function
 // ------------------------------------------------

 for (let i = 1; i <= 20; i++){
    console.log(i);
 }

function sumEveryNumber(){
    let sum = 0;    
    for (let i = 2; i <= 100; i+=2){
        sum += i;
    }
   return sum;
}
    
console.log(sumEveryNumber());

// Fifth function
// ------------------------------------------------

function reversText(string){
    return string.split("").reverse().join("");
}

console.log(reversText("Hello, my name is Pasha!"));

function spawLetters(string){
    if (string.length < 7) {
        return "Error, too short text";
    }

let letter = string.split("");
 
    [letter[2], letter[4], letter[6]] = [letter[4], letter[6], letter[2]];

    return letter.join("");
}
console.log(spawLetters("Hello, my name is Pasha!"));

// Sixth function
// ------------------------------------------------

function mediana(arr){
    arr.sort((a, b) => a - b);
    const mid = arr.length;
    if (mid % 2 === 0) {
        return (arr[mid / 2 - 1] + arr[mid / 2]) / 2;
    } else {
        return arr[Math.floor(mid / 2)];
    }
}

console.log(mediana([1, 2, 3, 4, 5, 6, 7,]));
//--------------------------------------------------
function uniqItems (arr){
    const uniqValues = new Set(arr);
    return uniqValues.size;
}
console.log(uniqItems([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));


// Seventh function
// ------------------------------------------------

function checkLeapYear(year){
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } 
    return false;
}

console.log(checkLeapYear(2024));
function direction(string){
    let directionString = "";
    for (let i = 0; i < string.length; i++){
        switch (string[i]) {
            case "^":
                directionString += "North";
                break;
            case "v":
                directionString += "South";
                break;
            case "<":
                directionString += "West";
                break;
            case ">":
                directionString += "East";
                break;
            default:
                directionString += "Error, wrong direction";
        }
        if (i < string.length - 1) {
            directionString += ", ";
        }
    }
    return directionString;
}

console.log(direction("^>v<"));

// Eighth function
// ------------------------------------------------
function Factorial(num) {
    const factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors.length > 0 ? factors : [1];
}

console.log(Factorial(10)); // [2, 5]
console.log(Factorial(12)); // [2, 2, 3]

// Nineth function
// ------------------------------------------------
function ageCalculator(birthDate){
    const today = new Date();
    const birthDay = new Date(birthDate);
    const years = today.getFullYear() - birthDay.getFullYear();
    const months = today.getMonth() - birthDay.getMonth();
    const days = today.getDate() - birthDay.getDate();
    
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        const month = today.getMonth() - 1;
        days += new Date(today.getFullYear(), month, 0).getDate();
    }
    return `${years} years, ${months} months, ${days} days`;
}

console.log(ageCalculator("01/01/1999"));

// Tenth function
// ------------------------------------------------
function valueChecker(arr, val){
    return arr.includes(val);
}

console.log(valueChecker([1, 2, 3, 4, 5], 8));