import { useState } from "react";

const Parent = ({ children }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((old) => old + 1);
  };
  return (
    <div className="parent">
      <h5>正确示例1</h5>
      <p>父组件Count--{count}</p>
      <button onClick={handleClick}>增加</button>
      {children}
    </div>
  );
};

export default Parent;
