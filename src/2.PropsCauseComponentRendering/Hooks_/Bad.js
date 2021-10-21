import { useState, useEffect } from "react";
const Son = ({ componentDetails, anyMethod }) => {
  useEffect(() => {
    console.log("Son -> componentDetails", componentDetails);
  }, [componentDetails]);
  useEffect(() => {
    console.log("Son -> anyMethod", anyMethod);
  }, [anyMethod]);
  return <div className="son">{componentDetails.name}</div>;
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
      <Son componentDetails={{ name: "子组件" }} anyMethod={() => {}} />
    </div>
  );
};

export { Son, Parent };
