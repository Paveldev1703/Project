// First funcrtion.  
//----------------------------------------------------
function fibonacci(x) {
  let sequence = [0, 1];
  for (let i = 2; i < x; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

console.log(fibonacci(10));

// Second function
//----------------------------------------------------

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindrome("madam"));

// Third function
//----------------------------------------------------

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];	
function sumMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(sumMatrix(matrix));

// Fourth function
//----------------------------------------------------
function Sort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

console.log(Sort([5, 2, 8, 3, 1, 6, 4]));

// Fifth function
//----------------------------------------------------

const carList = ['Toyota', 'BMW', 'Mercedec', 'Mazda']

function filterCars(carList) {
    let newCarList = [];
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].startsWith('M')) {
            newCarList.push(carList[i]);
        }
    }
    return newCarList;
}

console.log(filterCars(carList));

// Second way 

const users = [
    { name: "Alice", age: 25, country: "USA" },
    { name: "Bob", age: 17, country: "UK" },
    { name: "Charlie", age: 30, country: "Canada" },
    { name: "David", age: 15, country: "Australia" }
  ];
  
function filterAdults(users) {
    return users.filter(user => user.age > 18); 
  }
 
const adults = filterAdults(users);
  console.log(adults);

  // Sixth function
  //----------------------------------------------------
  
const counter = "Hello my name is Peter Parker";

function counterLetters(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        counter ++;
    }
    return counter;
}

console.log(counterLetters(counter));

// Seventh function
//----------------------------------------------------
function groupValues(arr) {
    let result = [];
    let current = [];
    let currentValue;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === currentValue) {
            current.push(arr[i]);
        } else {
            if (current.length > 0) {
                result.push(current);
            }
            current = [arr[i]];
            currentValue = arr[i];
        }
    }
    result.push(current);
    return result;
}

console.log(groupValues([1, 2, 2, 3, 3, 3]));

// Eighth function
//----------------------------------------------------
function sumNumbersInString(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            sum += Number(str[i]);
        }
    }
    return sum;
}

console.log(sumNumbersInString("Hello 1 my 4 name 8 is 9 Pitter 10 Parker"));



//Exampel function
function sumOfNumbersInString(input) {
    const numbers = input.match(/\d+/g);
    if (!numbers) {
      return 0;
    }
    
    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);

    return sum;
  }

  console.log(sumOfNumbersInString("abc123defgh6"));
  console.log(sumOfNumbersInString("no digits here"));

// Ninth function
//----------------------------------------------------

const kelvinsToCelsius = (celvins) => {
    return (celvins - 273.15);
}
const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5 / 9);
}

const fahrenheitTOKelvins = (fahrenheit) => {
    return ((fahrenheit + 459.67) * 5 / 9);
}


console.log(kelvinsToCelsius(+20));
console.log(fahrenheitToCelsius(20));
console.log(fahrenheitTOKelvins(100));