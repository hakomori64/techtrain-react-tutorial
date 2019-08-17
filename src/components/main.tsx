import React, { FC } from "react";
import InputForm from "./InputForm";
import AddTodoButton from "./AddTodoButton";
import TodoList from "./TodoList";

const Main: FC = () => (
  <>
    <InputForm />
    <AddTodoButton />
    <TodoList />
  </>
);

export default Main;
