import React, { Component } from 'react';
import styled from "styled-components";

const ImgControlsDiv = styled.div`
  display: flex;
   justify-content: space-evenly;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent};
  border: 1px solid ${ props => props.theme.colors.primaryBlue};
`;

export default class ImgControls extends Component {

  render() {
    return (
      <ImgControlsDiv { ...this.props.children }/>
    )
  }
}
