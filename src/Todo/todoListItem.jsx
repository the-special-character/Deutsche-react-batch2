import PropTypes from "prop-types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { memo, useEffect, useRef, useState } from "react";
import { Input } from "../components/ui/input";
import { CheckIcon } from "@radix-ui/react-icons";

const TodoListItem = ({ item, updateTodo, deleteTodo }) => {
  console.log("TodoListItem render");
  const [isUpdating, setIsUpdating] = useState(false);
  const updatedTextRef = useRef(null);

  const toggleIsUpdating = () => setIsUpdating((val) => !val);

  const updateItem = (event) => {
    event.preventDefault();
    const updatedText = updatedTextRef.current;
    const text = updatedText.value;
    updateTodo({ ...item, text });
    updatedText.value = "";
    toggleIsUpdating();
  };

  useEffect(() => {
    if (isUpdating && updatedTextRef.current) {
      updatedTextRef.current.value = item.text;
    }
  }, [item.text, isUpdating]);

  return (
    <li className="flex items-center gap-4 m-4">
      <Checkbox
        checked={item.isDone}
        id="terms"
        onCheckedChange={(checked) => updateTodo({ ...item, isDone: checked })}
      />
      {isUpdating ? (
        <form className="flex-1 flex gap-4" onSubmit={updateItem}>
          <Input ref={updatedTextRef} />
          <Button type="submit" size="icon">
            <CheckIcon className="h-4 w-4" />
          </Button>
        </form>
      ) : (
        <>
          <label
            htmlFor="terms"
            className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.text}
          </label>
          <Button onClick={toggleIsUpdating}>Update</Button>
        </>
      )}

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteTodo(item)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoListItem);
