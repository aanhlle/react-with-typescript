import React from "react";
import { useRef, useContext } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const inputTodo = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTodo.current!.value;

    if (enteredText.trim().length === 0) return;
    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">new todo</label>
      <input id="text" ref={inputTodo} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
