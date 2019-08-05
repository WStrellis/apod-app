import React, { Component } from 'react'
import styled from "styled-components";

const CopyrightP = styled.p`
  text-align: right;
`;

export default class Copyright extends Component {
  render() {
    return (
      <CopyrightP>
        Image Credit: {this.props.copyright} 
      </CopyrightP>
    )
  }
}
