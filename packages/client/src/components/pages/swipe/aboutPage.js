import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Giulia from "./IMG_5776.jpg";
import Dre from "./Dre.jpg";
import June from "./me.jpg";
import Nina from "../../../images/nina.png"


let inPic =
  "https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png";

let us = [
  {
    name: "June",
    image: June,
    role: "Quality Assurance Tester",
    about: "",
    links: "https://github.com/Juneavina",
    linked: "https://www.linkedin.com/in/june-avina/",
  },
  {
    name: "Giulia",
    image: Giulia,
    role: "Product Owner",
    about: "",
    links: "https://github.com/GiuliaCasteluci",
    linked:
      "https://www.linkedin.com/in/giuliastefanellicasteluci/?locale=en_US",
  },
  {
    name: "Dre",
    image: Dre,
    role: "Scrum Master",
    about: "",
    links: "https://github.com/DreLouis2",
    linked: "https://www.linkedin.com/in/drelouis2/",
  },
  {
    name: "Nina",
    image: Nina,
    role: "Quality Assurance Tester",
    about: "",
    links: "https://github.com/ninaproctor",
  },
];

function AboutPage() {
  return (
    <span className="page">
      <ToastContainer></ToastContainer>
      <h1 className="emergency-page-h2" style={{ width: "100vw" }}>
        Get To Know Us
      </h1>
      <div className="d-flex mb-5 flex-wrap justify-content-evenly">
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

            {member.linked ? (
              <Container className="d-flex flex-row justify-content-evenly m-2">
                <a href={member.links} target={"_blank"}>
                  <img
                    className="circleIcon"
                    src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                    alt="developer"
                  />
                </a>
                <a href={member.linked} target={"_blank"}>
                  <img className="circleIcon" src={inPic} alt="developer" />
                </a>
              </Container>
            ) : (
              <Container className="d-flex flex-row justify-content-evenly m-2">
                <a href={member.links} target={"_blank"}>
                  <img
                    className="circleIcon"
                    src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                    alt="developer"
                  />
                </a>
              </Container>
            )}
          </Card>
        ))}
      </div>
    </span>
  );
}

export default AboutPage;
