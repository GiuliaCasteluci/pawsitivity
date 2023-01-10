import React from "react";
import biz from "../../../images/bizinsider.png";
import dog from "../../../images/dog-img.jpg";
import lady from "../../../images/lady-img.jpg";
import mashable from "../../../images/mashable.png";
import techcrunch from "../../../images/TechCrunch.png";
import tnw from "../../../images/tnw.png";
import ham from "../../../images/iphone6ham.png";

const HomePage = () => {
  return (
    <>
      <section id="title">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1>Find your newest addition to your family today!</h1>
                <button
                  type="button"
                  class="btn btn-dark btn-lg download-button"
                >
                  <i class="fab fa-apple"></i> Download
                </button>
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg download-button"
                >
                  <i class="fab fa-google-play"></i> Download
                </button>
              </div>
              <div className="col-sm-6">
                <img className="title-image" src={ham} alt="dog" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="row">
          <div class="feature-box col-sm">
            <i class="icon fas fa-check-circle fa-4x"></i>
            <h3>Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </div>

          <div class="feature-box col-sm">
            <i class="icon fas fa-bullseye fa-4x"></i>
            <h3>Elite Clientele</h3>
            <p>We have all the pets, the greatest.</p>
          </div>

          <div class="feature-box col-sm">
            <i class="icon fas fa-heart fa-4x"></i>
            <h3>Guaranteed to work.</h3>
            <p>Find your newest addition to your family.</p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2>Im so happy I finally have a furever home. Woof.</h2>
              <img class="testimonial-image" src={dog} alt="dog-profile"></img>
              <em>Pebbles, New York</em>
            </div>

            <div class="carousel-item">
              <h2 class="testimonial-text">
                "I adopted a dog from Pawsitivity and it's been the best
                decision I've ever made. My dog is so happy now and I couldn't
                be happier!"
              </h2>
              <img
                class="testimonial-image"
                src={lady}
                alt="lady-profile"
              ></img>
              <em>Beverly, Illinois</em>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section id="press">
        <img class="press-logo" src={techcrunch} alt="tc-logo"></img>
        <img class="press-logo" src={tnw} alt="tnw-logo"></img>
        <img class="press-logo" src={biz} alt="biz-insider-logo"></img>
        <img class="press-logo" src={mashable} alt="mashable-logo"></img>
      </section>

      <section id="cta">
        <h3 classname="ctah3">
          Find your newest addition to your family today!
        </h3>
        <div class="text-center">
          <button type="button" class="btn btn-dark btn-lg download-button">
            <i class="fab fa-apple"></i> Download
          </button>
          <button type="button" class="btn btn-light btn-lg download-button">
            <i class="fab fa-google-play"></i> Download
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
