import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import Home from "../Components/Home";
import NewPoll from "../Components/NewPoll";
import PollingStation from "../Components/PollingStation";

// images
import BlockVoteLogo from "./assets/blockvotelogo.svg";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
    const changeCandidatesFunction = async (prompt)=>{
        let namepair=await window.contract.getCandidatePair({promp:prompt})
        localStorage.setItem("Candidate1",namepair[0])
        localStorage.setItem("Candidate1",namepair[1])
        localStorage.setItem("Candidate1",namepair[2])
        localStorage.setItem("Candidate1",namepair[3])
        window.location.replace(window.location.href+"PollingStation")
    }
  return (
    <Router>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/NewPoll">New Poll</Nav.Link>
        <Nav.Link onClick={window.accountId===''?login:logout} >
          {window.accountId===""?"Login" : window.accountId}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/PollingStation">
        <PollingStation/>   
    </Route>
    <Route exact path="/NewPoll">
        <NewPoll/>
    </Route>
</Switch>
</Router>);
}