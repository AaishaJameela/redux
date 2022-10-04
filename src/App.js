import "./App.css";
import { increment, decrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const result = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement Counter</h1>
          <h4>Using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              onClick={() => dispatch(decrement())}
            >
              <span>-</span>
            </a>
            <input type="text" className="quantity__input" value={result} />
            <a
              className="quantity__plus"
              onClick={() => dispatch(increment(1))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
