import React, { Fragment, useState, useEffect } from "react";
import "./Front.css";

const Front = () => {
  const [stopWatch, setWatch] = useState([]);
  const [isPause, setPause] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isPause) {
      interval = setInterval(() => {
        second === 60 && setMinute((prev) => prev + 1);
        second === 60 && setSecond((prev) => prev * 0);
        minute === 60 && setHour((prev) => prev + 1);
        minute === 60 && setMinute((prev) => prev * 0);
        setSecond((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPause, second, minute, hour]);

  const startWatch = () => {
    isPause ? setPause(false) : setPause(true);
  };

  const reset = () => {
    if(isPause){
      startWatch();
    }
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  const recordWatch = () => {
    console.log(stopWatch);
    let temp = stopWatch;
    temp.push("" + hour + ":" + minute + ":" + second);
    setWatch(temp);
  };

  return (
    <Fragment>
      <div className="color-white">
        <div className="row">
          <div className="col-2">
            <div className="card" style={{ padding: "10px 20px" }}>
              <div className="card-body">
                <div className="row text-center h3 "> Hour</div>
                <hr />
                <div
                  className="row text-center h1 "
                  style={{ fontSize: "90px" }}
                >
                  {hour}{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="card" style={{ padding: "10px 20px" }}>
              <div className="card-body text-center">
                <div className="row text-center h3"> Minute</div>
                <hr />
                <div
                  className="row text-center h1 "
                  style={{ fontSize: "90px" }}
                >
                  {" "}
                  {minute}
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="container">
              <div className="row">
                <div
                  className="card"
                  style={{ padding: "10px 20px", width: "100%" }}
                >
                  <div className="card-body">
                    <div className="row text-center h3"> Second</div>
                    <hr />
                    <div
                      className="row text-center h1 "
                      style={{ fontSize: "90px" }}
                    >
                      {second}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 flex text-right">
            <div className="">
              <button className="btn1 btn-small btn-lg" onClick={() => reset()}>
                Stop
              </button>
            </div>
            <div className="">
              <button
                className="btn1 btn-small btn-lg "
                onClick={() => recordWatch()}
              >
                Record
              </button>
            </div>
            <div className="">
              <button
                className="btn1 btn-small btn-lg "
                onClick={() => startWatch()}
              >
                Start
              </button>
            </div>
          </div>
          <div className="col-2 card">
            <div className="container card-body">
              <div className="row text-center h3"> TimeStamp</div>
              <hr width="200px" />
              <div style={{height:"500px",overflow:"scroll",backgroundColor:"white",}}>
                <table className="table table-stripped table-bordered">
                  <thead>
                    <tr>
                      <th>Sr</th>
                      <th>Time-stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stopWatch.map((ele, index) => {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{ele}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Front;
