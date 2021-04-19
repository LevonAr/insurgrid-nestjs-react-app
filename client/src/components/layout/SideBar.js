import ClientsSidebar from "../layout/ClientsSideBar";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ClientsTable from "../utils/ClientsTable";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      client: null,
    };
  }

  componentDidMount() {
    const apiUrl = "http://localhost:5000/items";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ client: data }));
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <img
          src="https://uploads-ssl.webflow.com/5efbabdd706379633896a16e/5f5fd3909b54a778299a6a2f_InsurGrid-Logo.svg"
          width="150"
          alt="InsurGrid logo"
          class="header-logo"
          style={{
            paddingLeft: "30px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        ></img>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/directory">Directory</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/analysis">Analysis</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Clients">
            <ClientsSidebar />
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
            <Menu.Item key="6">Marsh & McLennan</Menu.Item>
            <Menu.Item key="8">Progressive</Menu.Item>
            <Menu.Item key="10">MetLife</Menu.Item>
            <Menu.Item key="12">Philip Chaney</Menu.Item>
            <Menu.Item key="14">Allstate</Menu.Item>
            <Menu.Item key="16">Aflac</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
