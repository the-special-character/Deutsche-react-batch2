import { useState } from "react";

const Test = ({ name }) => {
  const [data, setData] = useState(name);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData("rohit")}>Change Name</button>
    </div>
  );
};

export default Test;
