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
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/directory">Directory</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/api_tester">Analysis</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Clients">
            <ClientsSidebar />
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
            <Menu.Item key="6">All State</Menu.Item>
            <Menu.Item key="8">Mercury</Menu.Item>
            <Menu.Item key="10">Allianz</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
