import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Row, Col, Container } from "react-bootstrap";

import icon from "../assets/images/mayaIcon.png";
import "./styles.css";

function Home({ history }) {
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
                /*                 href={"http://localhost:3000/arabigo"}
                 */ onClick={() => {
                  history.push("/arabigo");
                }}
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
                onClick={() => {
                  history.push("/maya");
                }}
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
