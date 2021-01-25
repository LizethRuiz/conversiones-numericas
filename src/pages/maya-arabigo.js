import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import { Button, Container, Row, Col } from "react-bootstrap";

import ceroMaya from "../assets/images/0.png";
import unoMaya from "../assets/images/1.png";
import dosMaya from "../assets/images/2.png";
import tresMaya from "../assets/images/3.png";
import cuatroMaya from "../assets/images/4.png";
import cincoMaya from "../assets/images/5.png";
import seisMaya from "../assets/images/6.png";
import sieteMaya from "../assets/images/7.png";
import ochoMaya from "../assets/images/8.png";
import nueveMaya from "../assets/images/9.png";
import diezMaya from "../assets/images/10.png";
import onceMaya from "../assets/images/11.png";
import doceMaya from "../assets/images/12.png";
import treceMaya from "../assets/images/13.png";
import catorceMaya from "../assets/images/14.png";
import quinceMaya from "../assets/images/15.png";
import dieciseisMaya from "../assets/images/16.png";
import diecisieteMaya from "../assets/images/17.png";
import dieciochoMaya from "../assets/images/18.png";
import diecinueveMaya from "../assets/images/19.png";
import forma from "../assets/images/forma.png";
import "./styles.css";

function MayaArabigo() {
  const [number, setNumber] = useState();
  const [mayaNumber, setMayaNumber] = useState([]);

  const setState = (name) => {
    setMayaNumber([...mayaNumber, name]);
  };

  const conversion = () => {
    console.log("ahora es ", mayaNumber);
    let sum = 0;
    let j = 0;
    for (let i = mayaNumber.length - 1; i >= 0; i--) {
      let potency = Math.pow(20, i);
      console.log("potencia = ", potency);
      console.log("numero = ", mayaNumber[j].num);
      sum = sum + potency * mayaNumber[j].num;
      j++;
    }
    console.log("total = ", sum);
    setNumber(sum);
  };

  return (
    <div className="fondo">
      <div className="fondo-medio ">
        <Container>
          <Row
            style={{
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "10px",
              fontFamily: "Yusei Magic",
            }}
          >
            <Col>
              <h2
                style={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Maya ➡️ Arábigo
              </h2>
            </Col>
          </Row>
          <Row /* className="justify-content-md-center" */>
            <Col>
              <img
                alt="ceroMaya"
                src={ceroMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: ceroMaya, num: 0 });
                }}
              ></img>
              <img
                alt="unoMaya"
                src={unoMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: unoMaya, num: 1 });
                }}
              ></img>
              <img
                alt="dosMaya"
                src={dosMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: dosMaya, num: 2 });
                }}
              ></img>
              <img
                alt="tresMaya"
                src={tresMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: tresMaya, num: 3 });
                }}
              ></img>
              <img
                alt="cuatroMaya"
                src={cuatroMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: cuatroMaya, num: 4 });
                }}
              ></img>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <img
                alt="cincoMaya"
                src={cincoMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: cincoMaya, num: 5 });
                }}
              ></img>
              <img
                alt="seisMaya"
                src={seisMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: seisMaya, num: 6 });
                }}
              ></img>
              <img
                alt="sieteMaya"
                src={sieteMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: sieteMaya, num: 7 });
                }}
              ></img>
              <img
                alt="ochoMaya"
                src={ochoMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: ochoMaya, num: 8 });
                }}
              ></img>
              <img
                alt="nueveMaya"
                src={nueveMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: nueveMaya, num: 9 });
                }}
              ></img>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <img
                alt="diezMaya"
                src={diezMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: diezMaya, num: 10 });
                }}
              ></img>
              <img
                alt="onceMaya"
                src={onceMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: onceMaya, num: 11 });
                }}
              ></img>
              <img
                alt="doceMaya"
                src={doceMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: doceMaya, num: 12 });
                }}
              ></img>
              <img
                alt="treceMaya"
                src={treceMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: treceMaya, num: 13 });
                }}
              ></img>
              <img
                alt="catorceMaya"
                src={catorceMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: catorceMaya, num: 14 });
                }}
              ></img>
            </Col>
          </Row>
          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <img
                alt="quinceMaya"
                src={quinceMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: quinceMaya, num: 15 });
                }}
              ></img>
              <img
                alt="diciseisMaya"
                src={dieciseisMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: dieciseisMaya, num: 16 });
                }}
              ></img>
              <img
                alt="dicisieteMaya"
                src={diecisieteMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: diecisieteMaya, num: 17 });
                }}
              ></img>
              <img
                alt="dieciochoMaya"
                src={dieciochoMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: dieciochoMaya, num: 18 });
                }}
              ></img>
              <img
                alt="diecinueveMaya"
                src={diecinueveMaya}
                className="imgStyle"
                onClick={() => {
                  setState({ img: diecinueveMaya, num: 19 });
                }}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fondo-medio ">
        <Container style={{ paddingTop: "65px" }}>
          <Row>
            <Col>
              {mayaNumber.map((item, idx) => {
                return (
                  <Row style={{ alignItems: "center" }}>
                    <img alt={idx} src={item.img} className="imgStyle"></img>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Button
              variant="outline-success"
              style={{
                borderRadius: "50px",
                width: "80%",
                borderColor: "white",
                color: "white",
              }}
              onClick={() => {
                conversion();
              }}
            >
              Convertir
            </Button>
          </Row>
          <Row
            style={{ paddingTop: "20px", color: "white", textAlign: "center" }}
          >
            <h2>El numero es {number}</h2>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MayaArabigo;
