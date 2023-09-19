# Answers

**Question 1:**

**CODE:**
```javascript
// Calling the function before it is declared
addNumbers(5, 7);

// Function declaration
function addNumbers(a, b) {
  const sum = a + b;
  console.log("Sum:", sum);
}
```

**OUTPUT:**
```
Sum: 12
```

**Question 2:**

**CODE:**
```javascript
// Calling the function before it is declared
multiplyNumbers(3, 4);

// Function expression
const multiplyNumbers = function(a, b) {
  const product = a * b;
  console.log("Product:", product);
};
```

**OUTPUT:**
```
Product: 12
```

**Question 3:**

**CODE:**
```javascript
// Function declaration
function sumNumbers(a, b) {
  // Variable declaration using var
  var result;
  console.log("Result before assignment:", result);
  
  result = a + b;
  console.log("Result after assignment:", result);
}

// Calling the function
sumNumbers(10, 20);
```

**OUTPUT:**
```
Result before assignment: undefined
Result after assignment: 30
```

**Question 4:**

**CODE:**
```javascript
{
  // Variable declaration using let
  console.log("Value of x before declaration (using let):", x);
  let x = 5;
  console.log("Value of x after declaration (using let):", x);

  // Variable declaration using var
  console.log("Value of y before declaration (using var):", y);
  var y = 10;
  console.log("Value of y after declaration (using var):", y);

  // Variable declaration using const
  console.log("Value of z before declaration (using const):", z);
  const z = 15;
  console.log("Value of z after declaration (using const):", z);
}
```

**OUTPUT:**
```
ReferenceError: x is not defined
Value of y before declaration (using var): undefined
Value of y after declaration (using var): 10
ReferenceError: Cannot access 'z' before initialization
```

**Question 5:**

**CODE:**
```javascript
{
  // Attempting to log the value of a variable declared with let before assignment
  console.log("Value of x before assignment (using let):", x);
  let x = 5;
}
```

**OUTPUT:**
```
ReferenceError: Cannot access 'x' before initialization
```