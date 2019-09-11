import React, { Component } from 'react';
import styled from "styled-components";

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  border: 4px solid red;
`;

export default class ImgModal extends Component {

  render() {
    return (
      <ModalContainer/>
    )
  }
}
