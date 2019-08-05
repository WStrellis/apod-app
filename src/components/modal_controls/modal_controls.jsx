import React, { Component } from 'react';
import styled from "styled-components";

const ModalControlsContainer = styled.div`
  height: 200px;
  width: 300px;
  border: 1px solid red;
`;

export default class ModalControls extends Component {

  render() {
    return (
      <ModalControlsContainer/>
    )
  }
}
