import { createContext, useContext } from "react";
import { useCustomReducer } from "../useCustomizeContext";
const CustomizeContext = createContext(undefined);

const Son1 = () => {
  console.log("子组件1 重新渲染了！！");
  return <div className="son">子组件1</div>;
};
const Son2 = () => {
  const { count, handleIncrement } = useContext(CustomizeContext);
  console.log("子组件2 重新渲染了！！");
  return (
    <div className="son">
      <p>子组件2-{count}</p>
      <button onClick={handleIncrement}>增加</button>
    </div>
  );
};

const Parent = () => {
  const value = useCustomReducer({ initValue: 1 });
  return (
    <CustomizeContext.Provider value={value}>
      <div className="parent">
        <h5>错误示例</h5>
        <Son2 />
        <Son1 />
      </div>
    </CustomizeContext.Provider>
  );
};

export { Son1, Parent, Son2 };
