import "./App.css";
import React, { } from "react";
import {  Routes, Route } from "react-router-dom";
import List from "./components/list/List";
import Nav from "./components/Nav/Nav";
import ChatApp from "./components/chatApp/ChatApp";
import User from "./components/user/User";
import Error from "./components/error/Error";
import Front from "./components/stopwatch/Front";
import Home from "./components/Home/Home";
import Chatroom from "./components/chatApp/room/Chatroom";
import Counter from "./components/counter/Counter";



function App() {
  return (
    <div className="App">

      <div className="container-fluid">
        <div className="row">
          <Nav />
        </div>

        <div className=" pad">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/user/:id" element={<User/>}/>
            <Route path="chatApp" element={<ChatApp/>} />
            <Route path="chatApp/chatroom" element={<Chatroom />} />
            <Route path="watch" element={<Front />} />
            <Route path="counter" element={<Counter />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
