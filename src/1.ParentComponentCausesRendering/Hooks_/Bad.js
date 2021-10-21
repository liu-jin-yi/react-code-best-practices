import { useState } from "react";
const Son = () => {
  console.log("子组件重新渲染了！！");
  return <div className="son">子组件</div>;
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((old) => old + 1);
  };
  return (
    <div className="parent">
      <h5>错误示例</h5>
      <p>父组件Count--{count}</p>
      <button onClick={handleClick}>增加</button>
      <Son />
    </div>
  );
};

export { Son, Parent };
