import { useCallback, useEffect, useRef, useState } from "react";
import TodoForm from "./todoForm";
import TodoFilter from "./todoFilter";
import TodoList from "./todoList";

const Todo = () => {
  const [filterType, setFilterType] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const todoTextRef = useRef(null);

  const addTodo = useCallback(async (event) => {
    try {
      event.preventDefault();
      const todoText = todoTextRef.current;
      const text = todoText.value;

      const res = await fetch("http://localhost:3000/todoList", {
        method: "POST",
        body: JSON.stringify({
          text,
          isDone: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      setTodoList((val) => [...val, json]);

      todoText.value = "";
    } catch (error) {}
  }, []);

  const updateTodo = useCallback(async (item) => {
    try {
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      setTodoList((val) => {
        const index = val.findIndex((x) => x.id === item.id);
        return [...val.slice(0, index), json, ...val.slice(index + 1)];
      });
    } catch (error) {}
  }, []);

  const deleteTodo = useCallback(async (item) => {
    try {
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "DELETE",
      });

      setTodoList((val) => {
        const index = val.findIndex((x) => x.id === item.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (error) {}
  }, []);

  const loadTodo = useCallback(async (ft = "all") => {
    try {
      let url = "http://localhost:3000/todoList";
      if (ft !== "all") {
        url += `?isDone=${ft === "completed"}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      setTodoList(json);
      setFilterType(ft);
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadTodo();
  }, [loadTodo]);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="m-8">Todo App</h1>
      <TodoForm addTodo={addTodo} ref={todoTextRef} />
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFilter filterType={filterType} loadTodo={loadTodo} />
    </div>
  );
};

export default Todo;
