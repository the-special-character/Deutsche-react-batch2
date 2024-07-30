import PropTypes from "prop-types";

const bgColor = "beige";
const color = "red";

// Component
// props are immutable
// First Letter of Component should be capital
// from one component return only single element
// apply style as an object
// instead class use className
const App = ({ label, id, type }) => {
  return (
    <>
      <label
        htmlFor={id}
        style={{
          color,
          backgroundColor: bgColor,
        }}
        className="abc"
      >
        {label}
      </label>
      <input type={type} id={id} />
    </>
  );
};

App.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

App.defaultProps = {
  type: "text",
};

export default App;
