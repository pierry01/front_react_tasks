import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "./list/List";
import axios from "axios";

const Tasks = (props) => {
  useEffect(() => {
    getTasks();
  }, []);

  let tasksData = [];
  const [tasks, setTasks] = useState(tasksData);

  const getTasks = () => {
    axios
      .get("https://jpierry-api-tasks.herokuapp.com/tasks")
      .then((res) => {
        if (res.data != null) {
          tasksData = res.data;
        }
        setTasks(tasksData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
        <p className="title">To-do</p>
        <List
          tasks={tasks.filter(task => task.done === false)}
        />
      </Col>

      <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
        <p className="title">Done</p>
        <List
          tasks={tasks.filter(task => task.done === true)}
        />
      </Col>
    </Row>
  );
};

export default Tasks;
