import React, { Component } from 'react'
import styled from "styled-components";

const HexSVG = styled.svg`
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 0;
  stroke: ${ props => props.theme.colors.primaryBlue};
  fill: ${ props => props.theme.colors.primaryBlueTransparent}
  top: -50%;
  left: -50%;
`;

export default class HexIcon extends Component {
  render() {
    return (
      <HexSVG  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.158 63.204">
            <path d="M-113.515 138.627l-24.47-14.128V96.244l24.47-14.128 24.47 14.128v28.255z" transform="matrix(-1.07545 0 0 .93204 -90.5 -71.268)"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </HexSVG>
    )
  }
}
