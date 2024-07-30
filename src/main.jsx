import ReactDOM from "react-dom/client";
import App from "./components/customInput";
import Counter from "./components/counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>Hello world</h1>
    <input type="password" />
    <App label="Name" id="name" />
    <App label="Email" type="email" id="email" />
    <App label="Password" type="password" id="password" />
    <App label="Confirm Password" type="password" id="confirmPassword" />
    <Counter />
  </div>
);
