import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import TodoListItem from "./todoListItem";

const Todo = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="m-8">Todo App</h1>
      <form className="flex">
        <Label htmlFor="todoText" className="sr-only">
          Todo Text
        </Label>
        <Input
          type="text"
          id="todoText"
          placeholder="Todo Text"
          className="rounded-r-none"
        />
        <Button className="rounded-l-none">Add Todo</Button>
      </form>
      <ul className="list-none w-full m-0 flex-1">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
      <footer className="flex w-full">
        <Button className="flex-1 rounded-none">All</Button>
        <Button className="flex-1 rounded-none">Pending</Button>
        <Button className="flex-1 rounded-none">Completed</Button>
      </footer>
    </div>
  );
};

export default Todo;
