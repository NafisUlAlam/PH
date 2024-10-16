export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) listItem = <li style={{ listStyleType: "none" }}>{task} done</li>;
  else listItem = <li style={{ listStyleType: "none" }}>{task} not done</li>;
  return listItem;
}

// export default function Todo2({ task, isDone }) {
//   return <li>{isDone && `${task} is done`}</li>;
// }
