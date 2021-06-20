import React from "react";
import { useRef } from "react";

const NewTodo = () => {
  const inputTodo = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTodo.current!.value;

    if (enteredText.trim().length === 0) return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">new todo</label>
      <input id="text" ref={inputTodo} />
      <button>Submit</button>
    </form>
  );
};
