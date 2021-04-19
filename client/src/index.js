// My Components
import SideBar from "./components/SideBar";

// React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Ant D Dependencies
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <div className="site-layout-background">
                <Switch>
                  <Route />
                  <Redirect from="/" to="/admin/dashboard" />
                </Switch>
              </div>
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
