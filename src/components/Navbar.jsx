import React from "react";
import "../css/navbar.css";
import Nav from 'react-bootstrap/Nav';
import HandWave from "./HandWave";

const Navbar = () => {
  return (
    <div className="nav_content">
      <div className="hello">
        <h3>Hello Admin</h3>
        <div className="lottie"><HandWave /></div>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/"><i class="bi bi-house-door-fill"></i>Home</Nav.Link>
        <Nav.Link eventKey="link-1"><i class="bi bi-people-fill"></i>Employees</Nav.Link>
        <Nav.Link eventKey="link-2"><i class="bi bi-person-lines-fill"></i>Contact</Nav.Link>
        <Nav.Link eventKey="link-3"><i class="bi bi-info-circle-fill"></i>About</Nav.Link>
      </Nav>
    </div>
  );
};

export default Navbar;
