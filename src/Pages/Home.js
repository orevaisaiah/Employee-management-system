import React, { useState, useEffect } from "react";
import '../Components/Dash.css';
import { Modal, Button } from "react-bootstrap";
import Header from '../Components/Header';
import Navbar from "../Components/Navbar";
import Rightbar from "../Components/Rightbar";
import axios from 'axios'

function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit ={
    
  };
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://empmgtapp.herokuapp.com/api/admin/")
      .then(({ data }) => {
        setEmployees(data.data);
        
      });
      
  }, []);

  return (
    <div className='main-home'style={{textAlign:'center'}}>
      <Header />
      <Navbar />
     <Rightbar />   
    <div className="home-main">
      
      <div style={{ display: "flex", margin: "3%" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "700" }}>Welcome Back!</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap:'30%',
          marginLeft: "3%",
          marginRight: "3%",
        }}
      >
        <div>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sit
            eget feugiat cras feugiat at pellentesque enim.
          </p>
        </div>

        <div className="home-btn">

          <button onClick={handleShow} style={{width:'177px', height:'54px', border:'2px solid #3D50C7', borderRadius:'10px', fontWeight:'700'}}>Add Employee</button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="vw-100" style={{ fontWeight: 700 }}>
                Add Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="vh-90">
              <form className="modal-input">
                <label for="employee name">Employee Name</label>
                <br />
                <input type="text" />
                <br />
                <label for="phone">Phone</label>
                <br />
                <input type="tel" />
                <br />
                <label for="department">Department</label>
                <br />
                <input type="select" />
                <br />
                <label for="Email">Email</label>
                <br />
                <input type="email" />
                <br />
              </form>
              <Button
                onClick={handleSubmit}
                className="modal-btn"
                style={{width:'177px', height:'54px', border:'2px solid #3D50C7', borderRadius:'10px', fontWeight:'700', margin:'100px 0 50px 150px'}}
              >
                Add
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      
      <div className="home-card">
        <div className="pay--card">
          <h1>0</h1>
          <span>Present Today</span>
        </div>
        <div className="pay--card">
          <h1 style={{ color: "#FF5959" }}>0</h1>
          <span style={{ color: "#FF5959" }}>Absent Today</span>
        </div>
        <div className="pay--card">
          <h1 style={{ color: "#EB9D05" }}>0</h1>
          <span style={{ color: "#EB9D05" }}>On Leave</span>
        </div>
        <div className="pay--card">
          <h1 style={{ color: "#A66DC2" }}>{employees.length}</h1>
          <span style={{ color: "#A66DC2" }}>Total Employees</span>
        </div>
      </div>
      
      <div className="main-chart">
        <div className="chart-style">
          <h4 style={{ display: "grid", justifyContent: "flex-start" }}>
            Monthly Attendance Overview
          </h4>
          <img src={process.env.PUBLIC_URL + "No Data.svg"} alt="..." />
          <p style={{ opacity: "2.8px" }}>No Data Available</p>
        </div>
        <div className="chart--left">
          <h5>Pending Request</h5>
          <img src={process.env.PUBLIC_URL + "folder 1.svg"} alt="..." />
          <p style={{ opacity: "0.8px", marginTop: "-90px" }}>No Request</p>
        </div>
      </div>

    
    </div>
    </div>
  );
}

export default Home;