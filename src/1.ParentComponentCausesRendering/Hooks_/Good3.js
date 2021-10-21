import { useState, memo } from "react";
import { Son } from "./Bad";

const SonMemo = memo(Son);

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((old) => old + 1);
  };
  return (
    <div className="parent">
      <h5>正确示例3</h5>
      <p>父组件Count--{count}</p>
      <button onClick={handleClick}>增加</button>
      <SonMemo />
    </div>
  );
};

export default Parent;
