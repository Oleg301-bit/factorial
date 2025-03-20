'use strict';

function factorial(n) {
  if (n < 0 || typeof n !== 'number') {
    return 'Error';
  }
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(-5));
console.log(factorial(0));
console.log(factorial('qewrere'));
console.log(factorial(1));
