// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// }

// const obj = [20, 30, 40];

// const strJSON = JSON.stringify(obj);
// const myobj = JSON.parse(strJSON);

// console.log(myobj);
// console.log(strJSON);

async function getData() {
  console.log(1);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(2);
  console.log(response);
  console.log(3);
  const data = await response.json();
  console.log(4);
  console.log(data);
  console.log(5);
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    try {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON within the try block
    } catch (error) {
      console.error("Error in response handling:", error);
      throw error; // Re-throw to propagate the error
    }
  })
  .then((data) => {
    try {
      // Simulate a processing error (e.g., if title is missing)
      if (!data.title) {
        throw new Error("Data is missing the title property");
      }
      console.log(data.title); // Log the title
    } catch (error) {
      console.error("Error in data processing:", error);
      throw error; // Re-throw to propagate the error
    }
  })
  .catch((error) => {
    console.error("Global catch:", error); // Handle any errors from the chain
  });

async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok"); // Throw if response is not okay
    }

    const data = await response.json(); // Await JSON parsing

    if (!data.title) {
      throw new Error("Data is missing the title property"); // Simulate a processing error
    }

    console.log(data.title); // Log the title if no errors occurred
  } catch (error) {
    console.error("Error:", error); // Handle any errors from the chain
  }
}

// Call the async function
fetchTodo();
