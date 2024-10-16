function hello() {
  console.log("hey");
}

//console.log(hello());

function create(name, str) {
  console.log(str + name);
}

//create(getStr("nafis", "alam"), "alam");
function getStr(first, last) {
  return first + last;
}

function create2(func, first, last, nick) {
  return func(first, last) + nick;
}

//console.log(create2(getStr, "nafis", "alam", "alam"));

function getFullName(name, name2) {
  return name + name2;
}

function create3(name, nick) {
  return name + nick;
}

//console.log(create3(getFullName("nafis", "alam"), "alam"));

function add(a, b) {
  return a + b;
}

function create4(func, a, b, c) {
  return func(a, b) + c;
}

function add() {
  console.log("hey");
}
//console.log(create4(add, 1, 2, 3));

document.getElementById("make-green").addEventListener("click", () => {
  add();
});
