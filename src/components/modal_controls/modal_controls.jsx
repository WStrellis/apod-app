import React, { Component } from 'react';
import styled from "styled-components";



const ModalControlsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid ${ props => props.theme.colors.primaryBlue};
`;

export default class ModalControls extends Component {

  render() {
    return (
      <ModalControlsContainer {...this.props.children} />
    )
  }
}
