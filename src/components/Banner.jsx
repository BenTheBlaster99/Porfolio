import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

function Banner() {
    const toRotate = [ " "]
  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my porfolio</span>
              <h1>
                {" "}
                {`Hello I'm Aimen`}
                <span className="wrap">Web developement</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                dolores quidem rem. Repudiandae ea unde quisquam sint a non re
              </p>
              <button onClick={() => console.log("connect")}>
                let's Connect <ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Headder Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
