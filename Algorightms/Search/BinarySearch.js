const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    const mid = Math.floor((left + right)/2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] > num) right = mid - 1;
    else left = mid + 1;
  }
  
  return -1;
};

console.log(binarySearch([1, 3, 5, 7, 9, 11], 10));
console.log(binarySearch([2, 3, 4, 5, 6, 7, 8], 6));
console.log(binarySearch([13, 15, 22, 59, 80], 15));

/**
 * Recurssive Binary Search
 * @param left 
 * @param right 
 * @param num 
 * @returns 
 */
const arr = [2, 3, 4, 5, 6, 7, 8];

const recBinarySearch = (left, right, num) => {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === num) return mid;
  else if (arr[mid] > num) right = mid - 1;
  else left = mid + 1;

  return recBinarySearch(left, right, num);
}

console.log(recBinarySearch(0, arr.length -1, 6));