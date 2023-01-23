//an example using state for functional components
import { useState } from "react";

export default function ButtonState() {
  const [title, setTitle] = useState("Default");
  const [count, setCount] = useState(0);

  const newTitle = () => {
    setTitle("A Title");
  };
  const newCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Input title={title} count={count} />
      <button onClick={newTitle}> Update Title </button>
      <button onClick={newCount}> Update Counter </button>
    </div>
  );
}

function Input(props) {
  return (
    <div>
      <p>Title: {props.title} </p>
      <p>Count: {props.count} </p>
    </div>
  );
}