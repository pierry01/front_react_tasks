import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const List = (props) => {
  const checkTask = (task) => {
    let params = { task: { done: "true" } };
    axios
      .put(`http://jpierry-api-tasks.herokuapp.com/tasks/${task.id}`, params)
      .then((res) => {})
      .catch();
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Table responsive>
            <tbody>
              {props.tasks.map((task) => {
                return (
                  <tr key={task.id}>
                    <td className="col-md-10">{task.title}</td>
                    <td>
                      {task.done === false ? (
                        <a className="check" href="/">
                          <FontAwesomeIcon
                            icon="check-circle"
                            onClick={() => checkTask(task)}
                          />
                        </a>
                      ) : null}
                    </td>
                    <td>
                      <a
                        className="delete"
                        href="/"
                        onClick={() => {
                          axios.delete(
                            `http://jpierry-api-tasks.herokuapp.com/tasks/${task.id}`
                          );
                        }}
                      >
                        <FontAwesomeIcon icon="trash-alt" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default List;
