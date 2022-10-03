import React, { Fragment, useEffect } from "react";
import "./List.css";
import axios from "axios";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import users, { setUsers } from "../../Store/reducers/users";

const List = () => {
  // eslint-disable-next-line no-use-before-define
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    let json = axios.get("https://jsonplaceholder.typicode.com/users");
    json.then((json) => {
      setTimeout(() => {
        dispatch(setUsers({ users: json.data, isLoading: false }));
        console.log(json.data);
      }, 2000);
    });

    return () => {
      dispatch(setUsers({ users: [], isLoading: true }));
    };
  }, [dispatch]);

  if (usersState.isLoading) return <Loader />;

  return (
    <Fragment>
      <div className="App-header">
        {usersState.users.map((user) => (
          <Card key={user.id} user={user}>
            Hi!{" "}
          </Card>
        ))}
      </div>
      <div className="row"> </div>
    </Fragment>
  );
};

export default List;
