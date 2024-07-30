import PropTypes from "prop-types";
import TodoListItem from "./todoListItem";
import { memo } from "react";

const TodoList = ({ todoList, updateTodo, deleteTodo }) => {
  return (
    <ul className="list-none w-full m-0 flex-1">
      {todoList.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        );
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
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
