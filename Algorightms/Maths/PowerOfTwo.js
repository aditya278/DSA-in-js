// Problem: Given a +ve integer 'n', determine if the number is a power of 2 or not.
// Power of 2 => there exists an integer 'x' such that 'n' === 2^x

// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(4) = true (2^2)
// isPowerOfTwo(7) = false

/**
 * Solution 1
 * @param num 
 * @returns 
 */

const isPowerOfTwo = (num) => {
  if (num < 1) return false;
  while(num > 1) {
    if (num % 2 !== 0)
      return false;
    num /= 2;
  }

  return true;
};

console.log(isPowerOfTwo(64));
// Complexity: O(log n)


/**
 * Solution 2
 * Using bitwise & operator
 * 
 * Bitwise & is 1 if both numbers are 1, else it is 0
 * 
 * 3 is 11 in binary
 * 4 is 100 in binary. It's 2^2
 * 7 is 111 in binary.
 * 8 is 1000 in binary. It's 2^3 
 * and the example should look like:
 * (2) 10 & (1) 1 = 0
 * (3) 11 & (2) 10 = 1 
 * (4) 100 & (3) 11 = 0
 * (5) 101 & (4) 100 = 100
 * (6) 110 & (5) 101 = 100
 * (7) 111 & (6) 110 = 110 
 * (8) 1000 & (7) 111 = 0
 * 
 * Basically, if we do a bitwise & of any number (n) with (n-1), and if it returns a 0,
 * then it means that number is a power of 2. Else, it is not.
 */

const bitwisePowerOfTwo = (num) => {
   if (num < 1) return false;

   return (num & (num - 1)) === 0;
}

console.log(bitwisePowerOfTwo(64));
console.log(bitwisePowerOfTwo(65));