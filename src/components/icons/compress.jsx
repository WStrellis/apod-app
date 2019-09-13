import React, { Component } from 'react'
import styled from "styled-components";

const CompressSVG = styled.svg`
  display : block;
  position: relative;
  margin: 3px;
  stroke: ${ props => props.theme.colors.primaryBlue};
  fill : ${ props => props.theme.colors.primaryBlue};
  stroke-width: 0.6;
`;

export default class CompressIcon extends Component {
  render() {
    return (
      <CompressSVG className="icon activate" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 36.465 36.465">
        <g>
        <path d="M.935.935l9.607 9.607" strokeWidth="4" strokeLinecap="round"/>
        <path d="M14.857 6.91l2.814 10.76-10.762-2.813z"  strokeWidth="2" strokeLinejoin="round" />
        <g>
        <path d="M35.53 35.53l-9.606-9.606"  strokeWidth="4" strokeLinecap="round"/>
        <path d="M21.608 29.556l-2.813-10.762 10.76 2.814z"   strokeWidth="2" strokeLinejoin="round" />
        </g>
        </g> 
      </CompressSVG>
    ) 
  }
}
