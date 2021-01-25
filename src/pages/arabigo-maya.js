import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import fondo from "../assets/images/fondomaya.png";
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

function App() {
  const [number, setNumber] = useState(1);
  const [mayaNumber, setMayaNumber] = useState([]);
  const setState = (e) => {
    setNumber(e.target.value);
  };

  const conversion = () => {
    let numberConvert = number;
    let arrNumberMaya = [];

    let i = 1;
    let potency = 1;

    while (i <= numberConvert) {
      potency = i;
      i *= 20;
    }

    while (potency >= 1) {
      let division = Math.trunc(numberConvert / potency);
      let residue = numberConvert % potency;

      numberConvert = residue;
      potency = potency / 20;
      arrNumberMaya.push(division);
      setMayaNumber([...arrNumberMaya]);
    }
  };

  return (
    <div className="fondo1">
      <div className="fondo-medio2">
        <img
          alt="fondo"
          src={fondo}
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
      <div className="fondo-medio2">
        <Container>
          <Row
            style={{
              paddingTop: "10px",
              textAlign: "center",
              fontFamily: "Yusei Magic",
            }}
          >
            <Col>
              <h2
                style={{
                  color: "#ED4A03",
                  fontWeight: "bold",
                }}
              >
                ARÁBIGO ➡️ MAYA
              </h2>
            </Col>
          </Row>
          <Row style={{ paddingTop: "30px" }}>
            <Col sm></Col>
            <Col xs={8}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Ingrese el número a convertir"
                  id="number"
                  onChange={setState}
                />
                <InputGroup.Append>
                  <Button
                    variant="success"
                    onClick={() => {
                      conversion();
                    }}
                  >
                    Convertir
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col sm></Col>
          </Row>
          <Row>
            <Col>
              {mayaNumber.map((item) => {
                console.log("resulta ==> ", item);
                switch (item) {
                  case 0: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={ceroMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 1: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={unoMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 2: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={dosMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 3: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={tresMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 4: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={cuatroMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 5: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={cincoMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 6: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={seisMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 7: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={sieteMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 8: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={ochoMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 9: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={nueveMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 10: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={diezMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 11: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={onceMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 12: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={doceMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 13: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={treceMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 14: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={catorceMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 15: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={quinceMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 16: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={dieciseisMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 17: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={diecisieteMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 18: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={dieciochoMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  case 19: {
                    return (
                      <Row>
                        <Col sm></Col>
                        <img
                          alt="cero"
                          src={diecinueveMaya}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                        <Col sm></Col>
                      </Row>
                    );
                  }
                  default:
                    return 0;
                }
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
