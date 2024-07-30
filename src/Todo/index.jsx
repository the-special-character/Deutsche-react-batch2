import { useCallback, useRef, useState } from "react";
import TodoForm from "./todoForm";
import TodoFilter from "./todoFilter";
import TodoList from "./todoList";

const Todo = () => {
  const [filterType, setFilterType] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const todoTextRef = useRef(null);

  const addTodo = useCallback((event) => {
    event.preventDefault();
    const todoText = todoTextRef.current;
    const text = todoText.value;

    setTodoList((val) => [
      ...val,
      {
        id: new Date().valueOf(),
        text,
        isDone: false,
      },
    ]);

    todoText.value = "";
  }, []);

  const updateTodo = useCallback((item) => {
    setTodoList((val) => {
      const index = val.findIndex((x) => x.id === item.id);
      return [...val.slice(0, index), item, ...val.slice(index + 1)];
    });
  }, []);

  const deleteTodo = useCallback((item) => {
    setTodoList((val) => {
      const index = val.findIndex((x) => x.id === item.id);
      return [...val.slice(0, index), ...val.slice(index + 1)];
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="m-8">Todo App</h1>
      <TodoForm addTodo={addTodo} ref={todoTextRef} />
      <TodoList
        todoList={todoList}
        filterType={filterType}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFilter filterType={filterType} setFilterType={setFilterType} />
    </div>
  );
};

export default Todo;
