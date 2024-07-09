function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([2, 3, 4, 5, 6, 17, 8, 12]));
