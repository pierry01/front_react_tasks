import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "./list/List";
import axios from "axios";

const Tasks = () => {
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    axios
      .get("http://jpierry-api-tasks.herokuapp.com/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [tasks, setTasks] = useState([]);

  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
        <p className="title">To-do</p>
        <List tasks={tasks.filter((task) => task.done === true)} />
      </Col>

      <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
        <p className="title">Done</p>
        <List tasks={tasks.filter((task) => task.done === false)} />
      </Col>
    </Row>
  );
};

export default Tasks;
