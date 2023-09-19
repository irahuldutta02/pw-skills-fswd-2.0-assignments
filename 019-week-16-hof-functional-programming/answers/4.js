// List of books with authors and publication years
const books = [
  { title: "Book1", author: "Author1", year: 2005 },
  { title: "Book2", author: "Author2", year: 2015 },
  { title: "Book3", author: "Author3", year: 2008 },
  { title: "Book4", author: "Author4", year: 2012 },
];

// Function to filter and capitalize books published after 2010
function filterAndCapitalizeBooks(books) {
  const filteredBooks = books.filter((book) => book.year > 2010);
  const capitalizedBooks = filteredBooks.map((book) => ({
    title: book.title,
    author: book.author.toUpperCase(),
  }));
  return capitalizedBooks;
}

// Filter and capitalize books
const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);
