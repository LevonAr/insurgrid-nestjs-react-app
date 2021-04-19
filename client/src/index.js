// My Components
import SideBar from "./components/layout/SideBar";
import DirectoryPage from "./views/DirectoryPage";
import API_Tester from "./components/utils/API_Tester";
// React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Bootstrap Dependencies
import "bootstrap/dist/css/bootstrap.min.css";

// Ant D Dependencies
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const { Header, Content, Footer } = Layout;

/*
    fetch("http://localhost:5000/items", {mode: 'no-cors'})
      .then((response) => {
        return console.log(response.text());
      })
      .then((data) => {
          console.log(data);
      });
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, background: "#f0f2f5" }}
            />
            <Content style={{ paddingLeft: "200px", overflow: "initial" }}>
              <Switch>
                <Route path="/directory">
                  <DirectoryPage />
                </Route>
                <Route path="/api_tester">
                  <API_Tester />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Developed For: InsurGrid | By: Levon_Ar © 2021
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
