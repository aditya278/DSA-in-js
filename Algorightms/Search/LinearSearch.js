const linearSearch = (arr, num) => {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([5,2,6,1,7], 10));
console.log(linearSearch([5,2,6,1,7], 6));