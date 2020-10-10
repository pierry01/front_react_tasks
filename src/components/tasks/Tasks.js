import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "./list/List";
import CreateTask from "./create_tasks/CreateTasks";
import Axios from "axios";

const Tasks = () => {
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    Axios.get("http://jpierry-api-tasks.herokuapp.com/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  const [tasks, setTasks] = useState([]);

  return (
    <Row>
      <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
        <p className="title">To-do</p>
        <List tasks={tasks.filter((task) => task.done === false)} />
        <CreateTask getTasks={getTasks} />
      </Col>

      <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
        <p className="title">Done</p>
        <List tasks={tasks.filter((task) => task.done === true)} />
      </Col>
    </Row>
  );
};

export default Tasks;
