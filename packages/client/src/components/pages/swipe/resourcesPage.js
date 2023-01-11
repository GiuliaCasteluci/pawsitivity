import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { Card, Carousel, Container, NavLink, Row } from "react-bootstrap";

let helpPic = 'https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg'
let helpLink = 'https://www.humanesociety.org/resources/are-you-having-trouble-affording-your-pet'

function ResourcePage() {
  return (
    <span className="">
      <h1 className="ps-3 mt-4 m-auto" style={{color: 'rgb(239, 129, 114)'}}>Pet Care</h1>
      <Carousel className="mb-5 m-auto"  style={{marginTop: '-3vh'}}variant="dark">
        <Carousel.Item style={{height: '500px'}}>
          <img
            className="d-block w-100"
            src="https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/behavior-appearance/images/ginger-cat-getting-chin-scratched.jpg"
            alt="Cat Petting Article"
          />
          <Carousel.Caption className="bg-light">
            <h3>Do Cats Like to Be Petted?</h3>
            <NavLink style={{textDecoration: 'underline'}} href='https://www.hillspet.com/cat-care/behavior-appearance/do-cats-like-to-be-petted'>Click Here to View Article</NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{height: '500px'}}>
          <img
            className="d-block w-100"
            src="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/PetDisaster_1200x300.jpg?itok=y6uYu4vw"
            alt="Pet Disaster Preparedness"
          />
          <Carousel.Caption className="bg-light">
            <h3>Pet Disaster Preparedness</h3>
            <NavLink style={{textDecoration: 'underline'}} href='https://www.purina.com/articles/dog/care/pet-disaster-preparedness-emergency-kit'>Click Here for Tips on Creating a Pet Emergency Kit</NavLink>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{height: '500px'}}>
          <img
            className="d-block w-100"
            src="https://centralpetcare.com/wp-content/uploads/2016/06/AdobeStock_66044139.jpeg"
            alt="Laser Therapy Reduces Pain and Speeds Up Healing"
          />
          <Carousel.Caption className="bg-light">
            <h3>Laser Therapy Reduces Pain and Speeds Up Healing</h3>
            <NavLink style={{textDecoration: 'underline'}} href='https://centralpetcare.com/2016/06/24/laser-therapy-reduces-pain-and-speeds-up-healing/'>Click Here to View Article</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mb-3 mt-5 ps-3 d-flex flex-wrap justify-content-evenly">
        <Card style={{backgroundColor: 'rgb(239, 129, 114)'}} className="d-flex justify-content-evenly flex-wrap mb-5">
             <a href="https://www.petmd.com/cat/pet-lover/tips-first-30-days-after-adopting-cat" target="_blank">
              <Card.Img
              src={'https://static.thenounproject.com/png/782816-200.png'}
                className="d-block square"
                style={{ width: "10vw" , height: '10vw'}}
                alt='https://static.thenounproject.com/png/782816-200.png'
              />
              </a>
              <Card.Title className="m-auto">
                Dog Care
              </Card.Title>
              <a href="https://www.petmd.com/cat/pet-lover/tips-first-30-days-after-adopting-cat" style={{textDecoration: 'none'}}><Card.Text target="_blank" className="m-auto text-dark">Tips for New Cat Care</Card.Text></a>
          </Card>
          
        <Card style={{backgroundColor: 'rgb(239, 129, 114)'}} className="d-flex justify-content-evenly mb-5">
             <a href="https://www.petmd.com/dog/care/10-tips-first-30-days-after-adopting-dog" target="_blank">
              <Card.Img
              src={'https://cdn-icons-png.flaticon.com/512/620/620851.png'}
                className="d-block square"
                style={{ width: "10vw" , height: '10vw'}}
                alt='https://www.petmd.com/dog/care/10-tips-first-30-days-after-adopting-dog'
              />
              </a>
              <Card.Title className="m-auto">
                Dog Care
              </Card.Title>
              <a href="https://www.petmd.com/dog/care/10-tips-first-30-days-after-adopting-dog" style={{textDecoration: 'none'}}><Card.Text target="_blank" className="m-auto text-dark">Tips for New Dog Care</Card.Text></a>
          </Card>

          <Card style={{backgroundColor: 'rgb(239, 129, 114)'}}className="d-flex justify-content-evenly mb-5">
             <a href={helpLink} target="_blank">
              <Card.Img
              src='https://cdn-icons-png.flaticon.com/512/69/69881.png'
                className="d-block square"
                style={{ width: "10vw" , height: '10vw'}}
                alt={helpPic}
              />
              </a>
              <Card.Title className="m-auto">
                Assistance with Pet Care
              </Card.Title>
              <a href={helpLink} style={{textDecoration: 'none',}}><Card.Text target="_blank" className="m-auto text-dark">Need Help Affording Pet Care?</Card.Text></a>
          </Card>

          <Card style={{backgroundColor: 'rgb(239, 129, 114)'}}className="d-flex justify-content-evenly mb-5">
             <a href="https://www.nokillnetwork.org/" target="_blank">
              <Card.Img
              src={'https://cdn-icons-png.flaticon.com/512/6676/6676508.png'}
                className="d-block square"
                style={{ width: "10vw" , height: '10vw'}}
                alt='https://www.nokillnetwork.org/home/malihu-jquery-image-gallery/images/head_bg_1024.jpg'
              />
              </a>
              <Card.Title className="m-auto">
                Find Shelter
              </Card.Title>
              <a href="https://www.nokillnetwork.org/" style={{textDecoration: 'none'}}><Card.Text target="_blank" className="m-auto text-dark">Click Here to Locate a No-Kill Shelter</Card.Text></a>
          </Card>
          </Container>
      
    </span>
  );
}

export default ResourcePage;
