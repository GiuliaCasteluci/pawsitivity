import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown, Card } from "react-bootstrap";
import paws from "./PawsLogo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Giulia from './IMG_5776.jpg'

let us = [
  {
    name: "June",
    image:
      "https://t3.ftcdn.net/jpg/02/28/28/40/360_F_228284080_xjN2LkC6B3uEDtYq8x0WWcC2rm7fPVPC.jpg",
    role: "Quality Assurance Tester",
    about: "",
    links: [],
  },
  {
    name: "Giulia",
    image: Giulia,
    role: "Product Owner",
    about: "",
    links: [],
  },
  {
    name: "Dre",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1496845055/display_1500/stock-photo-letter-d-blue-fire-flames-on-black-isolated-background-realistic-fire-effect-with-sparks-part-of-1496845055.jpg",
    role: "Scrum Master",
    about: "",
    links: [],
  },
  {
    name: "Nina",
    image:
      "https://st.depositphotos.com/1007712/3122/v/450/depositphotos_31220539-stock-illustration-glowing-neon-font-shiny-letter.jpg",
    role: "Quality Assurance Tester",
    about: "",
    links: [],
  },
];

function AboutPage() {
  return (
    <span className="page">
      <ToastContainer></ToastContainer>
      <div className="d-flex flex-wrap justify-content-evenly">
        {us.map((member) => (
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
              {member.links.map((link) => (
                <img
                  className="circleIcon"
                  src={link.image}
                  href={""}
                  alt="developer"
                />
              ))}
              <a href="https://github.com/GiuliaCasteluci" target={'_blank'}><img
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
