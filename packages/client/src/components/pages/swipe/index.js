import React, { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import heart from "./heart.png";
import cancel from "./cancel.png";
import { useProvideAuth } from "../../../hooks/useAuth";
import { API_URL } from "../../../constants";

function SwipePage() {
  const [type, setType] = useState(null);
  const [likes, setArray] = useState([]);
  const [pets, setPets] = useState([]);
  const {
    state: { user },
  } = useProvideAuth();
  console.log(user);
  useEffect(() => {
    axios
      .get(`${API_URL}/like`)
      .then((response) => {
        if (response.status === 200 && response.data) {
          setPets(response.data);
        } else {
          console.error("Error fetching pets:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);
  return (
    <span className="page ">
      <ToastContainer></ToastContainer>
      <h1 className="emergency-page-h2">Pet Swipe</h1>
      <Container>
        {pets.length >= 2 ? (
          <Carousel
            className="d-flex justify-content-evenly"
            interval={null}
            indicators=""
            nextIcon={
              <img
                src={heart}
                style={{ width: "50px", marginBottom: "200px" }}
                alt="img"
              ></img>
            }
            prevIcon={
              <img
                src={cancel}
                style={{ height: "50px", marginBottom: "200px" }}
                alt="img"
              ></img>
            }
            slide={false}
            onSlid={(index, direction) => {
              if (direction === "start" && index === 0) {
                try {
                  let schema = {
                    user: user.uid,
                    pet: pets[index - 1]._id,
                  };
                  axios.patch(
                    `${API_URL}/like/${pets[index - 1]._id}`,
                    schema
                  );
                } catch (error) {
                  console.log(error);
                  return error;
                }
                toast.success(
                  `${pets[pets.length - 1].name} was added to likes`
                );
              } else if (direction === "end" && index === pets.length - 1) {
                console.log(0);
                toast.error(`${pets[0].name} was disliked`);
              } else if (direction === "start") {
                try {
                  let schema = {
                    user: user.uid,
                    pet: pets[index - 1]._id,
                  };
                  axios.patch(
                    `${API_URL}/like/${pets[index - 1]._id}`,
                    schema
                  );
                } catch (error) {
                  console.log(error);
                  return error;
                }
                setPets(pets.filter((pet) => pet._id !== pets[index - 1]._id));
                toast.success(`${pets[index - 1].name} was added to likes`);
              } else if (direction === "end") {
                console.log(index + 1);
                console.log(user.postLikes);
                // setPets(pets.filter(pet => pet._id !== pets[index+1]._id))
                toast.error(`${pets[index + 1].name} was disliked`);
              }
            }}
          >
            {pets.map((pet) => {
              return (
                <Carousel.Item>
                  <Card className="d-flex m-auto p-3" style={{ width: "50vw" }}>
                    <Card.Img
                      src={pet.image}
                      className="d-block square mt-2"
                      height="500"
                      alt={pets.indexOf(pet)}
                    />
                    <Card.Title className="m-auto d-flex">
                      <h3>{pet.name}</h3>
                    </Card.Title>
                    <Card.Subtitle className="m-auto">
                      <h6>
                        Type:{" "}
                        {pet.petType.charAt(0).toUpperCase() +
                          pet.petType.slice(1)}
                      </h6>
                    </Card.Subtitle>
                    <Card.Text className="m-auto text-dark">
                      Age: {pet.age}
                    </Card.Text>
                    <Card.Text className="m-auto text-dark">
                      Gender: {pet.gender}
                    </Card.Text>
                  </Card>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <Card
            className="d-flex m-auto mt-5 mb-5 p-3"
            style={{ width: "50vw" }}
          >
            <Card.Title className="m-auto mt-5">
              <h1>More Pets Coming Soon!!</h1>
            </Card.Title>
            <Card.Subtitle className="m-auto">COME BACK SOON</Card.Subtitle>
          </Card>
        )}
      </Container>
    </span>
  );
}
export default SwipePage;
