// First function
// --------------------------------------------

function nameMe(n){
    console.log(n);
}

nameMe("Pavel");


// Second function
// --------------------------------------------

function sumNumb(n1,n2){
    let sum = n1 + n2;
    console.log(sum);
}

sumNumb(3,5);

// Third function 
// --------------------------------------------

function someNumbers(number){
    
    if (number % 2 === 0){
        return "Del";
    }
    else {
         return "Don't del";
    }

}

console.log(someNumbers(4));


// Fourth function 
// --------------------------------------------

function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    if(n < 0){
        return "Число не имеет факториала";
    }
    if(n === 0){
        return 1;
    };
    return result;

}

console.log (factorial(3));


// Fifth function

function reversText(str){
    let reverse = str.split("").reverse("").join("");
    return reverse;
}
const result = reversText("This text shoud be reverse")

console.log (result);

// Arreys
// ----------------------------------------------------------------


// First 
// ----------------------------------------------------------

function sumArr(someText){
    let summ = 0;
    for(tegn of someText);
        if(!isNaN(tegn) && tegn !== " "){
            summ += Number(tegn);
        }
    return summ;
}

console.log(sumArr([1, 3, 4, 2, 5, 8]));