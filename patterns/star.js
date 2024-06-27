/**
 * Pattern 1:
 * *****
 * *****
 * *****
 * *****
 * *****
 */

const patternOne = () => {
  const i=5, j=5;
  for (let a=0; a<i; a++) {
    for (let b=0; b<j;b++)
      process.stdout.write('*');
    console.log();
  }
}

console.log('Pattern 1:');
patternOne();

/**
 * Pattern 2:
 * *
 * **
 * ***
 * ****
 * *****
 * ******
 */

const patternTwo = () => {
  const i=6;
  for(let a=0; a<i; a++) {
    for (let j=0; j<=a; j++)
      process.stdout.write('*');
    console.log();
  }
}

console.log('Pattern 2:')
patternTwo();

/**
 * Pattern 3:
 *          *
 *        * * *
 *      * * * * *
 *    * * * * * * *
 *  * * * * * * * * *
 */

const patternThree = () => {
  const n=5;
  for (let i=0; i<n; i++) {
    // Space
    for (let j=0; j<n-i-1; j++)
      process.stdout.write(' ');
    // Stars
    for (let k=0; k<((2*i)+1); k++)
      process.stdout.write('*')
    console.log();
  }
}

console.log('Pattern 3:')
patternThree();

/**
 * Pattern 4:
 *  * * * * * * * * *
 *    * * * * * * *
 *      * * * * *
 *        * * *
 *          *
 */

const patternFour = () => {
  const n=5;
  for(let i=0; i<n; i++) {
    // Space
    for(let j=0; j<i; j++) 
      process.stdout.write(' ');
    // Star
    for(let k=((2*(n-i))-1); k>0; k--)
      process.stdout.write('*');
    console.log();
  }
}

console.log('Pattern 4:')
patternFour();

/**
 * Pattern 5:
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * *
 *  * *
 *  *
 */

const patternFive = () => {
  const n = 9;
  for (let i=0; i<n; i++) {
    if (i<n/2)
      for (let j=0; j<=i; j++)
        process.stdout.write('*')
    else
      for (let j=n-i; j>0; j--)
        process.stdout.write('*')
    
    console.log();
  }
};

console.log('Pattern 5:')
patternFive();

/**
 * Pattern 6:
 *  1             1     
 *  1 2         2 1     
 *  1 2 3     3 2 1     
 *  1 2 3 4 4 3 2 1     
 */

const patternSix = () => {
  const n=4;
  for (let i=1; i<=n; i++) {
    // number
    for (let j=1; j<=i; j++)
      process.stdout.write(`${j}`);
    // Space
    for (let k=0; k<(2*(n-i)); k++)
      process.stdout.write(' ')
    // number
    for (let j=i; j>0; j--)
      process.stdout.write(`${j}`);
    console.log();
  }
}

console.log('Pattern 6:');
patternSix()