# Answers

**Question 1: Double using callback.**

**CODE:**
```javascript
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
```

**OUTPUT:**
```
[2, 4, 6, 8, 10]
```

**Question 2: String Manipulation.**

**CODE:**
```javascript
// Function to manipulate a string and return a callback function
function manipulateString(inputString) {
  const manipulatedString = inputString.toUpperCase();

  // Callback function to log the manipulated string
  function logString() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  }

  return logString;
}

// Example usage
const logStringCallback = manipulateString("hello, world!");
logStringCallback();
```

**OUTPUT:**
```
The manipulated string is: HELLO, WORLD!
```

**Question 3: Age in Days.**

**CODE:**
```javascript
// Function to calculate age in days and return a callback function
function ageInDays(person, callback) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;

  // Callback function to log the person's full name and age in days
  function logResult() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  }

  return logResult;
}

// Example usage
const person = {
  firstName: "Mithun",
  lastName: "S",
  age: 20,
};
const logResultCallback = ageInDays(person);
logResultCallback();
```

**OUTPUT:**
```
The person's full name is Mithun S and their age in days is 7300.
```

**Question 4: Arrange in alphabetical order.**

**CODE:**
```javascript
// Function to extract titles from a list of books and pass them to a callback function
function getBookTitles(books, callback) {
  const titles = books.map((book) => book.title);
  titles.sort(); // Sort titles alphabetically

  // Callback function to log the sorted titles
  function logTitles() {
    console.log("Titles in alphabetical order:");
    titles.forEach((title) => console.log(title));
  }

  return logTitles;
}

// Example usage
const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

const logTitlesCallback = getBookTitles(books);
logTitlesCallback();
```

**OUTPUT:**
```
Titles in alphabetical order:
1984
The Catcher in the Rye
To Kill a Mockingbird
```

**Question 5: Greeting Promise.**

**CODE:**
```javascript
// Function that returns a promise with a greeting
function greetWithPromise(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject("Name is required.");
    }
  });
}

// Example usage
const name = "Mithun";

greetWithPromise(name)
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((error) => {
    console.error(error);
  });
```

**OUTPUT:**
```
Hello, Mithun!
```

**Question 6: Fetch results asynchronously.**

**CODE:**
```javascript
// Function to fetch data from an API asynchronously
async function fetchDataAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Example usage
fetchDataAsync();
```

**OUTPUT:**
```
Fetched Data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

**Question 7: Multiple requests.**

**CODE:**
```javascript
// Function to fetch data from multiple APIs and combine the results
async function fetchDataFromMultipleEndpoints() {
  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);

    if (!todoResponse.ok || !postResponse.ok) {
      throw new Error(`HTTP error!`);
    }

    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };

    console.log("Combined Data:", combinedData);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Example usage
fetchDataFromMultipleEndpoints();
```

**OUTPUT:**
```
Combined Data: {
  todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  post: {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit repellat...soluta\n\nut aut placeat nihil quisquam perspiciatis unde\n\nomnis voluptatem accusantium...'
  }
}
```

**Question 8: Get Data from API and Display it on the browser console.**

**CODE (Browser Environment):**
```javascript
// Function to fetch and log data from an API in the browser console
function fetchDataAndDisplay() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Example usage
fetchDataAndDisplay();
```

**OUTPUT (Browser Console):**
```
Fetched Data: (Array of post objects) 
// the output is too long that's why not giving the output here or as a screenshot
```

**Question 9: Error Handling**

**CODE:**
```javascript
// Function to fetch data from an API and handle errors
function fetchDataWithErrorHandler() {
  fetch

("https://jsonplaceholder.typicode.com/posts/123456789")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Example usage
fetchDataWithErrorHandler();
```

**OUTPUT:**
```
Error: HTTP error! Status: 404
```