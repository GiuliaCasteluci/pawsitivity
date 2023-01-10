import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, Card } from "react-bootstrap";
import paws from "./PawsLogo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResourcePage() {
  return (
    <span className="page">
      <div className="mt-5 bg-light m-auto">
        <Card className="d-flex flex-row">
          <Card.Title>Me</Card.Title>
          <Card.Text>Me Details</Card.Text>
        </Card>
        <Card className="d-flex flex-row">
          <Card.Title>Me</Card.Title>
          <Card.Text>Me Details</Card.Text>
        </Card>
      </div>
    </span>
  );
}

export default ResourcePage;
