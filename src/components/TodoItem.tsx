import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onClick: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li onClick={props.onClick} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
