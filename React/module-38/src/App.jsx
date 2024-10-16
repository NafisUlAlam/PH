import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Actor from "./Actor";
import Todo from "./Todo";
import Singer from "./Singer";
function App() {
  const [count, setCount] = useState(0);

  const actors = ["sakib", "raj", "manna", "joshim"];
  const singers = [
    { name: "mahfuz", age: 20 },
    { name: "eva", age: 30 },
  ];

  const name = "nafis";
  return (
    <>
      <h1>Nafis + Zahra</h1>
      <Actor name={"bappa raj"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Singer name="mahfuz" age={20}></Singer>
      {singers.map((singer) => (
        <Singer name={singer.name} age={singer.age}></Singer>
      ))}
      <Device
        name={"laptop"}
        price={23}
        additional={`hello there ${name}`}
      ></Device>
      <Device name={"mobile"}></Device>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Todo task={"learn react"} isDone={true}></Todo>
      <Todo task={"explore core concepts"}></Todo>
      <Todo task={"try JSX"}></Todo>
      {/* <Todo2 task={"try JSX"} isDone={true}></Todo2> */}
    </>
  );
}

function Person() {
  const age = 30;
  const money = 20;
  const person = { name: "alif", age: 40 };

  return (
    <h3>
      I am {person.name} with age : {person.age}
    </h3>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>I am a student with {}</h3>
    </div>
  );
}

function Developer() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid red",
        borderRadius: "20px",
      }}
    >
      <h5>devo devo</h5>
    </div>
  );
}

function Device({ name = "null", price = "null", additional = "null" }) {
  //console.log(props);
  console.log(typeof name);
  console.log(typeof price);
  return (
    <h2>
      This device : {name}, its price is : {price}, additional : {additional}
    </h2>
  );
}

export default App;
