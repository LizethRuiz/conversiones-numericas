import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import icon from "../assets/images/mayaIcon.png";
import forma from "../assets/images/forma.png";
import "./styles.css";

function Home() {
  return (
    <div className="fondo">
      <div className="fondo-medio">
        <img
          alt="fondo"
          src={icon}
          style={{ width: "100%", height: "80%" }}
        ></img>
      </div>
      <div className="fondo-medio">
        <Container>
          <h1 style={{ fontFamily: "Yusei Magic", color: "white" }}>
            Conversión de Sistemas Numéricos
          </h1>
          <Row style={{ paddingTop: "50px" }}>
            <Col>
              <Button
                variant="outline-info"
                style={{
                  fontFamily: "Yusei Magic",
                  borderRadius: "50px",
                  width: "100%",
                  color: "white",
                  borderColor: "white",
                }}
                href={"http://localhost:3000/arabigo"}
                onClick={() => {}}
              >
                Arábigo - Maya
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-info"
                style={{
                  fontFamily: "Yusei Magic",
                  borderRadius: "50px",
                  width: "100%",
                  color: "white",
                  borderColor: "white",
                }}
                href={"http://localhost:3000/maya"}
                onClick={() => {}}
              >
                Maya - Arábigo
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
