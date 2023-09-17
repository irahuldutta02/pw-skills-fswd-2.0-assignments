function calculateTotalCartValue() {
  let totalValue = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalValue += arguments[i];
  }
  console.log(`The total cart value is ${totalValue}`);
  return totalValue;
}

calculateTotalCartValue(125, 20, 30);

// OUTPUT: The total cart value is 175
