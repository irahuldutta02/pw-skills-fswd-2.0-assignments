// Function to double each element in an array using a callback
function doubleArray(arr, callback) {
  const doubledArray = arr.map(callback);
  return doubledArray;
}

// Callback function to double a number
function doubleNumber(num) {
  return num * 2;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArray(originalArray, doubleNumber);
console.log(doubledArray);
