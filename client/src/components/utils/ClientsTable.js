import React, { useEffect, useState } from "react";
import List from "../api_utils/List";
import WithListLoading from "../api_utils/withListLoading";

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

function ClientsTable() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:5000/items`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <>
      <Container>
        <Card className="card-plain table-plain-bg">
          <Card.Header>
            <Card.Title as="h4">Clients Directory</Card.Title>
            <p className="card-category">Here sis a subtitle for this table</p>
          </Card.Header>
          <Card.Body className="table-full-width table-responsive px-0">
            <Table className="table-hover">
              <thead>
                <tr>
                  <th className="border-0">Client Name</th>
                  <th className="border-0">Insurance Company</th>
                  <th className="border-0">Monthly Payment</th>
                </tr>
              </thead>
              <ListLoading
                isLoading={appState.loading}
                repos={appState.repos}
              />
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default ClientsTable;
