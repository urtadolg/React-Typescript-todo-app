import React, { useState } from "react";

import Todo from "../models/todo";

const TodosContext = React.createContext<{
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string): void => {
    const newTodo = new Todo(text);

    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const removeItemHandler = (id: string) => {
    setTodos((state) => {
      return state.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        addTodo: addTodoHandler,
        removeTodo: removeItemHandler,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
