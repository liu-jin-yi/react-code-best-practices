import { useState, useMemo } from "react";
import { Son } from "./Bad";
const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((old) => old + 1);
  };
  return (
    <div className="parent">
      <h5>正确示例2</h5>
      <p>父组件Count--{count}</p>
      <button onClick={handleClick}>增加</button>
      {useMemo(
        () => (
          <Son />
        ),
        []
      )}
    </div>
  );
};

export default Parent;
