import React, { Component } from 'react'
import styled from "styled-components";

const CopyrightP = styled.p`
  position: absolute;
  bottom: -45px;
  right: 0;
  color: ${ props => props.theme.colors.primaryPurple };
`;

export default class Copyright extends Component {
  render() {
    return (
      <CopyrightP>
        Media Credit: {this.props.copyright} 
      </CopyrightP>
    )
  }
}
