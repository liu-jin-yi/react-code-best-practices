import { Parent as BadParent, Son } from "./Bad";
import Good1 from "./Good1";
import Good2 from "./Good2";
import Good3 from "./Good3";

const Hooks_ = () => {
  return (
    <div className="page-center">
      <h1>Hooks 示例</h1>
      <BadParent />
      <Good1>
        <Son />
      </Good1>
      <Good2 />
      <Good3 />
    </div>
  );
};

export default Hooks_;
