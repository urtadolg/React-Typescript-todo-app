import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.listContainer}>
      {todosCtx.todos.map((item) => {
        return (
          <TodoItem
            removeItem={todosCtx.removeTodo}
            key={item.id}
            id={item.id}
            text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
