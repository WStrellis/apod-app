import React, { Component } from 'react';
import styled from "styled-components";

const StyledBtn = styled.div`
  width: 50px;
  height: 50px;
  margin: 25px;
  position: relative
  z-index: 10;

  :hover .activate {
     filter: drop-shadow( 0px 0px 5px #49a499  );
  }
`;

export default class BtnContainer extends Component {
  render() {
    // if the button is not 'active' do not put give it an event handler
     const Btn = ( this.props.status === "activate")?
      <StyledBtn onClick={ this.props.clickHandler}>{ this.props.children}</StyledBtn>: 
     <StyledBtn >{this.props.children}</StyledBtn>;

    return (
      <>
      {Btn}
      </>
    )
  }
}
