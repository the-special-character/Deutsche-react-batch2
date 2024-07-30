import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { forwardRef, memo } from "react";
import PropTypes from "prop-types";

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log("TodoForm render");
  return (
    <form className="flex" onSubmit={addTodo}>
      <Label htmlFor="todoText" className="sr-only">
        Todo Text
      </Label>
      <Input
        ref={ref}
        type="text"
        id="todoText"
        placeholder="Todo Text"
        className="rounded-r-none"
      />
      <Button type="submit" className="rounded-l-none">
        Add Todo
      </Button>
    </form>
  );
});

TodoForm.displayName = "TodoForm";

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
