// react
import React, { useState, useEffect } from "react";

// css
import "./Main.css";

// server
import axios from "axios";

const Main = () => {
  const [data, setData] = useState({});
  const dataFetch = async () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => {
        setData(res.data);
        console.log(res.data.completed);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="_main_div">
      <h1>Main Page</h1>
      <h2>userId : {data.userId}</h2>
      <h2>Id : {data.id}</h2>
      <h2>title : {data.title}</h2>
    </div>
  );
};

export default Main;
