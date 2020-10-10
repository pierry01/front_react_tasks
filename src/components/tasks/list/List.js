import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = (props) => {
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
                          <FontAwesomeIcon icon="check-circle" />
                        </a>
                      ) : null}
                    </td>
                    <td>
                      <a className="delete" href="/">
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
