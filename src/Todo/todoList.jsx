import PropTypes from "prop-types";
import TodoListItem from "./todoListItem";
import { memo } from "react";

const TodoList = ({ todoList, filterType, updateTodo, deleteTodo }) => {
  return (
    <ul className="list-none w-full m-0 flex-1">
      {todoList.map((item) => {
        if (
          filterType === "all" ||
          (filterType === "pending" && !item.isDone) ||
          (filterType === "completed" && item.isDone)
        ) {
          return (
            <TodoListItem
              key={item.id}
              item={item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  filterType: PropTypes.oneOf(["all", "pending", "completed"]).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
