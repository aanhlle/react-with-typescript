import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          onClick={todoCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
