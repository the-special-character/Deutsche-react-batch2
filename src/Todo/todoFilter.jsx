import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { memo } from "react";

const TodoFilter = ({ filterType, loadTodo }) => {
  console.log("TodoFilter render");
  return (
    <footer className="flex w-full">
      {["all", "pending", "completed"].map((item) => (
        <Button
          key={item}
          variant={filterType === item ? "default" : "outline"}
          className="flex-1 rounded-none capitalize"
          onClick={() => loadTodo(item)}
        >
          {item}
        </Button>
      ))}
    </footer>
  );
};

TodoFilter.propTypes = {
  filterType: PropTypes.oneOf(["all", "pending", "completed"]).isRequired,
  loadTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
