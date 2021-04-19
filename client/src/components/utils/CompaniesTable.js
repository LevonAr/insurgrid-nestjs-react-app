import React, { useEffect, useState } from "react";
import List from "../api_utils/List";
import WithListLoading from "../api_utils/withListLoading";
import "bootstrap/dist/css/bootstrap.min.css";

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
} from "react-bootstrap";

export default class CompaniesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }

  componentDidMount() {
    const apiUrl = "http://localhost:5000/items";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="12">
              <Card className="card-plain table-plain-bg">
                <Card.Header>
                  <Card.Title as="h4">Companies Directory</Card.Title>
                  <p className="card-category">
                    Static Log of Company Information [Needs to be Connected to
                    NestJS and MongoDB]
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th className="border-0">Rank</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Industry</th>
                        <th className="border-0">Country</th>
                        <th className="border-0">Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Marsh & McLennan</td>
                        <td>Insurance Brokers</td>
                        <td>USA</td>
                        <td>$55.7 Billion</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Progressive</td>
                        <td>Property & Casualty Insurance</td>
                        <td>USA</td>
                        <td>$51 Billion</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MetLife</td>
                        <td>Life Insurance</td>
                        <td>USA</td>
                        <td>$43.3 Billion</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>Property & Casualty Insurance</td>
                        <td>USA</td>
                        <td>$34.4 Billion</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Allstate</td>
                        <td>Property & Casualty Insurance</td>
                        <td>USA</td>
                        <td>$32.6 Billion</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Aflac</td>
                        <td>Life Insurance</td>
                        <td>USA</td>
                        <td>$31.7 Billion</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
