import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <MDBNavbar color="black" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Clicky Game&nbsp;&nbsp;<i className="fas fa-mouse-pointer"></i></strong>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="#!" active>Current Score: {this.props.currentScore}</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" active><i className="fas fa-trophy"></i> {this.props.highScore}</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Navbar;
