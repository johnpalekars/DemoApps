import React, { Fragment } from "react";
import { useSelector,useDispatch } from "react-redux";
import {counterINC} from "../../Store/reducers/counter"; 
import { increment, decrement } from "../../Store/reducers/counter";

const Counter = () => {

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter.value);

  return (
    <Fragment>
      <div style={{color:"white",}}>{counter}</div>
        <br />
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(counterINC.actions.incrementByTen())}>+10</button>
    </Fragment>
  );
};

export default Counter;
