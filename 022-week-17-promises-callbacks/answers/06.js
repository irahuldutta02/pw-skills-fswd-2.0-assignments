// Function to fetch data from an API asynchronously
async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
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
