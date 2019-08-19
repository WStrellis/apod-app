import React, { Component } from 'react'
import Styled from "styled-components";

const HexDiv = Styled.div`
  width: 50px;
  height: 50px;
  margin: 25px;
  position: relative;
  z-index: 10;
`;

export default class HexButton extends Component {
  render() {
    return (
      <HexDiv> {this.props.children} </HexDiv>
    )
  }
}
