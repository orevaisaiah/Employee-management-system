import React from 'react'
import { Table } from "react-bootstrap";

function PayrollTab() {
    return (
      <div>
        <div className="table-format">
          <Table striped bordered hover style={{ width: "970px", height: "auto" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Allowance</th>
                <th>Basic Salary</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                {}
                <td>1</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                {}
                <td>2</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                {}
                <td>3</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                {}
                <td>4</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                {}
                <td>5</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
}

export default PayrollTab
