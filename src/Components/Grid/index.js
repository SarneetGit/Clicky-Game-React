import React from "react";
import { MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./style.css";


export default ({ characters , handleSelection }) =>(
    <MDBContainer className="mt-5" id="myContainer">
    <MDBRow className="mt-4">
      {characters.map(char => (
      <MDBCol md="3" key={char.id}>
      <MDBView hover zoom>
        <img              
          src={char.image}
          className="img-fluid img-thumbnail"
          data-name={char.name}
          data-id={char.id}
          alt=""
          onClick={handleSelection}
        />    
      </MDBView>
    </MDBCol> 
      ))}
     
    </MDBRow>
  </MDBContainer>
  )

 





