import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";

const CreateTask = (props) => {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState("");

  const handleSubmit = () => {
    let params = { task: { title: title, done: false } };
    Axios.post(`http://jpierry-api-tasks.herokuapp.com/tasks`, params);
    setShow(false);
    setTitle("");
    props.getTasks();
  };

  return (
    <>
      <Button
        onClick={(e) => setShow(true)}
        variant="dark"
        className="float-right create_task_btn"
      >
        + Tasks
      </Button>

      <Modal show={show || false} onHide={(e) => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="email"
            placeholder="Enter with your task..."
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => setShow(false)}>
            Close
          </Button>
          <form onSubmit={handleSubmit}>
            <Button variant="dark" type="submit">
              Create
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTask;
