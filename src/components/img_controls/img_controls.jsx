import React, { Component } from 'react';
import styled from "styled-components";

const ImgControlsDiv = styled.div`
  height: 200px;
  width: 400px;
  border: 1px solid red;
`;

export default class ImgControls extends Component {

  render() {
    return (
      <ImgControlsDiv/>
    )
  }
}
