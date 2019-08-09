import React, { Component } from 'react';
import styled from "styled-components";

const ImgControlsDiv = styled.div`
  height: 200px;
  width: 400px;
  background-color: ${ props => props.theme.colors.primaryblue.transparent};
  border: 1px solid ${ props => props.theme.colors.primaryblue};
`;

export default class ImgControls extends Component {

  render() {
    return (
      <ImgControlsDiv/>
    )
  }
}
