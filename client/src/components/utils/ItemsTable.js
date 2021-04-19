import React from "react";
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

export default class ItemsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:5000/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          itemsList: data,
        });
      });
  }

  render() {
    this.state.itemsList[0]
      ? console.log(
          "life:",
          this.state.itemsList.forEach((element) => console.log(element))
        )
      : console.log("death");
    return (
      <>
        <Container>
          <Row>
            <Col md="12">
              <Card className="card-plain table-plain-bg">
                <Card.Header>
                  <Card.Title as="h4">Clients Directory</Card.Title>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th className="border-0">Items</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Salary</th>
                        <th className="border-0">Country</th>
                        <th className="border-0">City</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td> </td>
                        <td>$36,738</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Doris Greene</td>
                        <td>$63,542</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Mason Porter</td>
                        <td>$78,615</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
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
