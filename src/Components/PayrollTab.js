import React, { useState, useEffect } from 'react'
import { Table } from "react-bootstrap";
import axios from "axios";


function PayrollTab() {

const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://empmgtapp.herokuapp.com/api/salary/all")
      .then(({ data }) => {
        setEmployees(data.data);
      });
  }, []);

    return (
      <div>
        <div className="table-format">
          <Table striped bordered hover style={{ width: "970px", height: "auto" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Bank Name</th>
                <th>Allowance</th>
                <th>Basic Salary</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            {employees.map((em) => (
            <tbody>
              <tr>
                
                <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" style={{width:'50px', height:'50px', borderRadius:'50%', backgroundColor:'rgb(245, 33, 33)'}}/>{em.accountHolderName}
                <td>{em.bankName}</td>
                <td>{em.allowance}</td>
                <td>{em.basicSalary}</td>
                <td>{em.grossSalary}</td>
                <td>{em.netSalary}</td>
                <td>{em.status}</td>
              </tr>
            </tbody>
             ))}
          </Table>
        </div>
      </div>
    );
}

export default PayrollTab
