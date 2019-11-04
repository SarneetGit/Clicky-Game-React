import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./style.css"

class Jumbo extends React.Component {

  getStyle =(bool) =>({

    0 : {
                fontWeight: "bold"   
        },
    
    true : {
                color: "green",
                fontWeight: "bold"        
            } ,
    
    false : {
                color: "red",
                fontWeight: "bold"        
            }
    
})[bool]

render() {
  const { message,correct } = this.props
  return (    
    <MDBJumbotron fluid className="rounded">
      <MDBContainer className="h-75">
        <h1 className="text-center" 
          style={this.getStyle(correct)}>{
            message === "" ? "Will you be the true Ruler of the Seven Kingdoms?" : message }
            </h1> 
        <br></br>
        <hr className="my-2" />
        <p className="lead">Rules</p>
        <p>1) Click on a character that has not been selected</p>
        <p>2) Try to select all character exactly once (12 in total) </p>
      </MDBContainer>
    </MDBJumbotron>
  )}
}

export default Jumbo;