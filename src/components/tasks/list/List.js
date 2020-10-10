import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

const List = (props) => {
  const checkTask = (task) => {
    let params = { task: { done: "true" } };
    Axios.put(
      `http://jpierry-api-tasks.herokuapp.com/tasks/${task.id}`,
      params
    );
  };

  const deleteTask = (task) => {
    if (window.confirm(`Are you sure you want to delete: "${task.title}"`)) {
      Axios.delete(`http://jpierry-api-tasks.herokuapp.com/tasks/${task.id}`);
    }
  };

  return (
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
                      onClick={() => deleteTask(task)}
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
  );
};

export default List;
