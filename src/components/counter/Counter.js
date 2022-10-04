import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterINC } from "../../Store/reducers/counter";
import { increment, decrement } from "../../Store/reducers/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.value);

  return (
    <Fragment>
      <div class="row h1">
        {" "}
        <div style={{ color: "white", fontSize: "100px" }} class="text-center">
          {counter}
        </div>
      </div>
      <br />
      {[1, 1, 1].map(() => (
        <hr style={{ color: "white" }} />
      ))}
      <br />
      <br />
      <div className="container">
        <div className="row">
        <div className="col-3 text-center">
            <button
              className="btn btn-lg btn-danger"
              onClick={() => dispatch(counterINC.actions.decrementByTen())}
            >
              -10
            </button>
          </div>
          <div className="col-3 text-center">
            <button
              className="btn btn-lg btn-danger"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <div className="col-3 text-center">
            <button
              className="btn btn-lg btn-primary"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className="col-3 text-center">
            <button
              className="btn btn-lg btn-primary"
              onClick={() => dispatch(counterINC.actions.incrementByTen())}
            >
              +10
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
