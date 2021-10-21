import { Parent as BadParent } from "./Bad";
import Good1 from "./Good1";
import Good2 from "./Good2";
const Hooks_ = () => {
  return (
    <div className="page-center">
      <h1>Hooks 示例</h1>
      <BadParent />
      <Good1 />
      <Good2 />
    </div>
  );
};

export default Hooks_;
