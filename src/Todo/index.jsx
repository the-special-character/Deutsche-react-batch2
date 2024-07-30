import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import TodoListItem from "./todoListItem";
import { useState } from "react";

const Todo = () => {
  const [filterType, setFilterType] = useState("all");
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodoList((val) => [
      ...val,
      {
        id: new Date().valueOf(),
        text: todoText,
        isDone: false,
      },
    ]);
    setTodoText("");
  };

  const updateTodo = (item) => {
    const index = todoList.findIndex((x) => x.id === item.id);
    setTodoList((val) => [
      ...val.slice(0, index),
      item,
      ...val.slice(index + 1),
    ]);
  };

  const deleteTodo = (item) => {
    const index = todoList.findIndex((x) => x.id === item.id);
    setTodoList((val) => [...val.slice(0, index), ...val.slice(index + 1)]);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="m-8">Todo App</h1>
      <form className="flex" onSubmit={addTodo}>
        <Label htmlFor="todoText" className="sr-only">
          Todo Text
        </Label>
        <Input
          type="text"
          id="todoText"
          placeholder="Todo Text"
          className="rounded-r-none"
          value={todoText}
          onChange={onChangeText}
        />
        <Button type="submit" className="rounded-l-none">
          Add Todo
        </Button>
      </form>
      <ul className="list-none w-full m-0 flex-1">
        {todoList
          .filter((item) => {
            switch (filterType) {
              case "completed":
                return item.isDone === true;
              case "pending":
                return item.isDone === false;
              default:
                return true;
            }
          })
          .map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </ul>
      <footer className="flex w-full">
        {["all", "pending", "completed"].map((item) => (
          <Button
            key={item}
            variant={filterType === item ? "default" : "outline"}
            className="flex-1 rounded-none capitalize"
            onClick={() => setFilterType(item)}
          >
            {item}
          </Button>
        ))}
      </footer>
    </div>
  );
};

export default Todo;
