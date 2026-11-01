function isPrime(num){
  if (num <= 1) return false;
  const numsToDivide = [2, 3, 5];
  for (let n of numsToDivide){
    if (num === n) return true;
    if (num % n === 0) return false;
  }
  return true;
}

module.exports = { isPrime };