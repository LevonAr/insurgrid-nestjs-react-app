import React, { useEffect, useState } from "react";
import SidebarList from "../api_utils/SideBarList";
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
  const ListLoading = WithListLoading(SidebarList);
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
      <Table>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </Table>
    </>
  );
}
export default ClientsTable;
