console.log("hello from external js file");
console.log(document);
const body = document.getElementsByTagName("body")[0];

const redButton = document.getElementById("make-red");
redButton.addEventListener("click", (event) => {
  body.style.backgroundColor = "rgba(120, 0, 0, 0.5)";
});

const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", (event) => {
  body.style.backgroundColor = "rgba(0, 120, 0, 0.5)";
});

const blueButton = document.getElementById("make-blue");
blueButton.addEventListener("click", (event) => {
  body.style.backgroundColor = "rgba(0, 0, 120, 0.5)";
});

const yellowButton = document.getElementById("make-yellow");
yellowButton.addEventListener("click", (event) => {
  body.style.backgroundColor = "yellow";
});
