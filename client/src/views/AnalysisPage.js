import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

export default function AnalysisPage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats" style={{ textAlign: "center" }}>
              <Card.Body>
                <Row style={{ marginLeft: "75px" }}>
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-chart text-warning"></i>
                  </div>
                  <div className="numbers">
                    <p className="card-category">Clients</p>
                    <Card.Title as="h4">1,741</Card.Title>
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  As of last month
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats" style={{ textAlign: "center" }}>
              <Card.Body>
                <Row style={{ marginLeft: "50px" }}>
                  <div className="numbers">
                    <p className="card-category">Revenue</p>
                    <Card.Title as="h4">$ 131,345</Card.Title>
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  In the last month
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats" style={{ textAlign: "center" }}>
              <Card.Body>
                <Row style={{ marginLeft: "90px" }}>
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-vector text-danger"></i>
                  </div>
                  <div className="numbers">
                    <p className="card-category">Claims</p>
                    <Card.Title as="h4">46</Card.Title>
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last month
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats" style={{ textAlign: "center" }}>
              <Card.Body>
                <Row style={{ marginLeft: "65px" }}>
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-favourite-28 text-primary"></i>
                  </div>

                  <div className="numbers">
                    <p className="card-category">New Clients</p>
                    <Card.Title as="h4">103</Card.Title>
                  </div>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  In the last month
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Website Analytics</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      showArea: false,
                      height: "245px",
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend" style={{ textAlign: "center" }}>
                  Web <i className="fas fa-circle text-info"></i>| iOS [Mobile]{" "}
                  <i className="fas fa-circle text-danger"></i>| Android
                  [Mobile] <i className="fas fa-circle text-warning"></i>
                </div>
                <hr></hr>
                <div className="stats" style={{ textAlign: "center" }}>
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Total Revenue Share</Card.Title>
                <p className="card-category">Per Insurance Company</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  />
                </div>
                <hr></hr>
                <div className="stats" style={{ textAlign: "center" }}>
                  <i className="far fa-clock"></i>
                  Last Calendar Year
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
