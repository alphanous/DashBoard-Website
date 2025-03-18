import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DataTable from "./DataTable";
import Footer from "./Footer";
import "../css/dashboard.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmployeeCrad from "./EmployeeCrad";
import EmployeeData from "./EmployeeData";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
import Contact from "./Contact";
import userimg from '../images/user_profile.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import Progress from "./Progress";
import Chart from "./Chart";

const Dashboard = () => {
  const [isDay, setIsDay] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
    document.body.classList.toggle('night-mode', !isDay);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest(".sidebar") && !event.target.closest(".menu")) {
      setIsSidebarOpen(false);
    }
  };

  // Attach event listener when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <Container fluid className={`main ${isDay ? 'day' : 'night'} g-0`}>
      <Row className="main-row g-0">
        {/* Sidebar with conditional class for show/hide */}
        <Col lg={2}  className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <Navbar />
        </Col>

        <Col lg={10} className="main-content g-0">
          <Row className="sub-row">
            <Col lg={12} className="first_head g-0">
              {/* Hamburger Button */}
              <h3 className="menu" onClick={toggleSidebar}>
                <i className="bi bi-list"></i>
              </h3>
              <h3>Dashboard</h3>
              <div className="extra">
                <div className="day_night">
                  <i className="bi bi-brightness-high-fill"></i>
                  <button onClick={toggleTheme} className="theme-toggle-btn">
                    {isDay ? <i className="bi bi-toggle2-off"></i> : <i className="bi bi-toggle2-on"></i>}
                  </button>
                  <i className="bi bi-moon-fill"></i>
                </div>
                <div className="user_img">
                  <img src={userimg} alt="User" />
                </div>
              </div>
            </Col>

            <Col lg={12} className="second g-0">
              <div className="three_cards">
                {ProjectData.map((data) => (
                  <ProjectCard key={data.id} name={data.name} amount={data.amount} num ={data.num} icon = {data.icon} />
                ))}
              </div>
              <div className="sale">
                <div className="progress_bar"><Progress /></div>
                <div className="chart_area"><Chart /></div>
              </div>
            </Col>

            <Col lg={12} className="card_area g-0">
              <h1>Top Employees</h1>
              <div className="cards">
                {EmployeeData.map((data) => (
                  <EmployeeCrad key={data.id} src={data.img} name={data.name} position={data.position} />
                ))}
              </div>
              <h1>All Employees</h1>
              <div className="table_area">
                <DataTable />
              </div>
            </Col>

            <Col className="g-0">
              <div className="connect">
                <Contact />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
