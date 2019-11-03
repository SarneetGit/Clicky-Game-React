import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./style.css"

class Jumbo extends React.Component {
  
render() {
  return (    
    <MDBJumbotron fluid>
      <MDBContainer>
        <h2 className="display-4">{this.props.message === "" ? "Will you be the true Ruler of the Seven Kingdoms?" : this.props.message }</h2> 
        <hr className="my-2" />
        <p className="lead">Rules</p>
        <p>1) Click on a character that you have not selected</p>
        <p>2) Continue clicking on a new (not already chosen) character until you reach 12</p>
      </MDBContainer>
    </MDBJumbotron>
  )}
}

export default Jumbo;