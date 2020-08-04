import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";

import Home from "./components/Home";
import Profile from "./components/Profile";

import "./App.less";

import logo from "./Logo.png";
import axios from "axios";

const { Header, Footer, Content } = Layout;
const { Link: AntLink, Text } = Typography;

let backEndURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev
  backEndURL = "http://localhost:9000";
} else {
  // production
  backEndURL = "https://tweet-cleaner-server.herokuapp.com";
}

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchAuthResponse = async () => {
      const authResponse = await axios
        .get(`${backEndURL}/auth/login/success`, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((response) => {
          if (response.status === 200) return response.data;
          throw new Error("Failed to authenticate user.");
        })
        .catch((err) => {
          return { error: "Failed to authenticate user." };
        });

      if (!authResponse.error) {
        setAuthenticated(true);
        setUser(authResponse.user);
      } else {
        setAuthenticated(false);
        setError(authResponse.err);
      }
    };
    fetchAuthResponse();
  }, []);

  return (
    <div>
      <Layout className="layout" style={{ height: "100vh" }}>
        <Header>
          <div className="logo">
            <Link to="/TweetCleanerWebsite">
              <img src={logo} alt="Website Logo" style={{ width: "50px" }} />
              <Text strong style={{ marginLeft: "8px" }}>
                TweetCleaner
              </Text>
            </Link>
          </div>
          {!authenticated ? (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/TweetCleanerWebsite">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <a href={`${backEndURL}/auth/twitter`}>Login</a>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <a href={`${backEndURL}/auth/logout`}>Logout</a>
              </Menu.Item>
            </Menu>
          )}
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content" style={{ margin: "16px 0" }}>
            <Switch>
              {authenticated && (
                <Route path="/profile">
                  <Profile user={user} />
                </Route>
              )}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Text strong>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <AntLink href="https://parsahejabi.com/" target="_blank">
              Parsa Hejabi
            </AntLink>{" "}
            - 2020
          </Text>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
