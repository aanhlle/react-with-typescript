import React, { useState } from "react";
import Todo from "../models/todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodoContext = React.createContext<todoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodo((prev) => prev.concat(newTodo));
  };

  const handleRemoveTodo = (id: number) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const valueObj: todoContextObj = {
    items: todo,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodoContext.Provider value={valueObj}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
