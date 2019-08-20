import React, { Component } from 'react'
import styled from "styled-components";

const ExpandSVG = styled.svg`
  display : block;
  position: relative;
  height: 100%;
  width: 100%;
  stroke: ${ props => props.theme.colors.primaryBlue};
  stroke-width: 0.8;
`;

export default class ExpandIcon extends Component {
  render() {
    return (
      <ExpandSVG className="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 5.292 5.292">
        <path d="M3.565.403H4.89v1.323m0 1.84v1.323H3.565m-1.839 0H.403V3.565m0-1.839V.403h1.323" fill="none" strokeLinecap="square" />
      </ExpandSVG>
    ) 
  }
}