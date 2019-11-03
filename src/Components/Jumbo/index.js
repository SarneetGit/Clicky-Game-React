import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./style.css"

class Jumbo extends React.Component {
  
render() {
  return (    
    <MDBJumbotron fluid>
      <MDBContainer className="h-75">
        <h1 className="text-center">{this.props.message === "" ? "Will you be the true Ruler of the Seven Kingdoms?" : this.props.message }</h1> 
        <hr className="my-2" />
        <p className="lead">Rules</p>
        <p>1) Click on a character that has not been selected</p>
        <p>2) Try to select all character exactly once (12 in total) </p>
      </MDBContainer>
    </MDBJumbotron>
  )}
}

export default Jumbo;