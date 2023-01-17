//Finds all the prime numbers within a range of numbers

function findPrime() {

    //println("This will find all the prime numbers within a range of numbers");

    var numOne = prompt("This will find all the prime numbers within a range of numbers. What is the first number? ");
    var numTwo = prompt("What is the second number? ");

    var primes = []

    for (var i = numOne; i <= numTwo; i++){
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(i);
        }
      }
      return primes;

}