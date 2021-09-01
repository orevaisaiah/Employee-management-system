import React from "react";
import '../Components/Dash.css'
import Add from "../Components/Add";
import Tables from "../Components/Tables";
import Navbar from '../Components/Navbar'
import Header from "../Components/Header";

function Employee() {
  return (
    <>
    <Navbar />
    <Header />
      <div>
        <h6 style={{ textAlign: "right", marginTop: "6.8rem", marginRight:'6rem' }}>
          <a
            href="manage employee"
            style={{ marginRight: "50px", textDecoration: "none" }}
          >
            <i class="fas fa-cog "></i> Manage Employee
          </a>
        </h6>
        <Add />
        <Tables />
      </div>
    </>
  );
}

export default Employee;