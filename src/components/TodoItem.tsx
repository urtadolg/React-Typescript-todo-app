import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  removeItem: (id: string) => void;
}> = (props) => {
  const onClickHandler = () => {
    props.removeItem(props.id);
  };

  return (
    <li onClick={onClickHandler} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
