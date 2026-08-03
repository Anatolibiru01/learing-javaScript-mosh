// Fizzbuzz
function Fizzbuzz(input){
    if (typeof input !== 'number') return "Not a number";

    
    if (input%3 === 0 && input%5 === 0) return "FizzBuzz";
    else if (input%3 === 0) return "Fizz";
    else if (input%5 === 0) return "Buzz";
    else return input;
}

console.log(Fizzbuzz(3));
console.log(Fizzbuzz(5));
console.log(Fizzbuzz(15));
console.log(Fizzbuzz("4"));
