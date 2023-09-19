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
