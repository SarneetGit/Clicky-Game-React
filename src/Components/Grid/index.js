import React from "react";
import { MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./style.css";

// console.log(this.props.characters)
class Grid extends React.Component {
  
  render() {    
    return (
      <MDBContainer className="mt-5" id="myContainer">
        <MDBRow className="mt-4">
          {this.props.characters.map(char => (
          <MDBCol md="3" key={char.id}>
          <MDBView hover zoom>
            <img              
              src={char.image}
              className="img-fluid img-thumbnail"
              data-name={char.name}
              data-id={char.id}
              alt=""
              onClick={this.props.handleSelection}
            />    
          </MDBView>
        </MDBCol> 
          ))}
         
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Grid;