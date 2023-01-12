import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, Card } from "react-bootstrap";
import paws from "./PawsLogo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Giulia from './IMG_5776.jpg'
import Dre from './Dre.png'
import June from './me.jpg'

let us = [
  {
    name: "June",
    image: June,
    role: "Quality Assurance Tester",
    about: "",
    links: 'blank',
  },
  {
    name: "Giulia",
    image: Giulia,
    role: "Product Owner",
    about: "",
    links: "https://github.com/GiuliaCasteluci",
  },
  {
    name: "Dre",
    image: Dre,
    role: "Scrum Master",
    about: "",
    links: 'https://github.com/DreLouis2',
  },
  {
    name: "Nina",
    image:
      "https://st.depositphotos.com/1007712/3122/v/450/depositphotos_31220539-stock-illustration-glowing-neon-font-shiny-letter.jpg",
    role: "Quality Assurance Tester",
    about: "",
    links: 'blank',
  },
];

function AboutPage() {
  return (
    <span className="page">
      <ToastContainer></ToastContainer>
      <div className="d-flex flex-wrap justify-content-evenly">
        {us.map(member => (
          <Card className="d-flex m-auto mt-5 p-3" style={{ width: "22vw" }}>
            <Card.Img
              src={member.image}
              className="d-block square mt-2"
              height="200"
              alt={member.image}
            />
            <Card.Title className="m-auto">
              <h1>{member.name}</h1>
            </Card.Title>
            <Card.Subtitle className="m-auto">{member.role}</Card.Subtitle>
            <Card.Text className="m-auto">{member.about}</Card.Text>
            <div className="d-flex flex-row justify-content-evenly m-2">
              <a href={member.links} target={'_blank'}><img
                className="circleIcon"
                src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                alt="developer"
              /></a>
            </div>
          </Card>
        ))}
      </div>
    </span>
  );
}

export default AboutPage;
