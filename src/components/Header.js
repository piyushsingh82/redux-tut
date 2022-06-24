import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Listing from "./Listing";
import Homepage from "./Home";
import About from "./About";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Logout from "./Logout";
import Mainapp from "./App";
import MatchResults from "./MatchResults";
import FlexboxDiv from "./FlexboxDiv";
class Header extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand >Usermanagment</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/Listing" className="btn">
                  List
                </Link>

                <Link to="/DashBoard" className="btn">
                  Dashboard
                </Link>
                <Link to="/About" className="btn">
                  About
                </Link>
                <Link to="/Matchresults" className="btn">
                  MatchResults
                </Link>
                <NavDropdown
                  title="Dropdown"
                  id="basic-nav-dropdown"
                  className="pullRight"
                >
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Flexbox">Flexbox</NavDropdown.Item>
                  <NavDropdown.Divider />{" "}
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/logout">Action</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={Mainapp}/>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/Home" exact component={Homepage} />
          <Route path="/About" component={About} />
          <Route path="/Listing" component={Listing} />
          <Route path="/DashBoard" component={Dashboard} />
          <Route path="/MatchResults" component={MatchResults}/>
          <Route path="/Flexbox" component={FlexboxDiv}/>
        </Router>
      </div>
    );
  }
}

export default Header;
