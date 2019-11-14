import React from "react";
import { Table } from "react-bootstrap";

import "./table.styles.scss";

const SavingMoneyTable = () => (
  <div className="saving__money__table">
    <Table striped hover size="sm">
      <tbody>
        <tr id="top-tr">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <img src={require("./assets/one.png")} alt="doubleparked" />
          </td>
          <td>
            <img src={require("./assets/two.png")} alt="doubleparked" />
          </td>
          <td>
            <img src={require("./assets/three.png")} alt="doubleparked" />
          </td>
          <td>
            <img src={require("./assets/four.png")} alt="doubleparked" />
          </td>
        </tr>
        <tr>
          <td>
            <h6>Search Directory</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>

        <tr>
          <td>
            <h6>Reviews</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>
        <tr>
          <td>
            <h6>Opening Hours</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>
        <tr>
          <td>
            <h6>Media Gallery</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>
        <tr>
          <td>
            <h6>Lesson Bookings</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>
        <tr>
          <td>
            <h6>Digital Diary</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>
        <tr>
          <td>
            <h6>Profile Page</h6>
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
          <td>
            <img src={require("./assets/sign.png")} alt="sign" />
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default SavingMoneyTable;
