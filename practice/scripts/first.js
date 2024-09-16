console.log("hello from external js file");
console.log(document);
const body = document.getElementsByTagName("body")[0];

const redButton = document.getElementById("make-red");
redButton.addEventListener("click", (event) => {
  body.style.backgroundColor = "rgba(120, 0, 0, 0.5)";
});
