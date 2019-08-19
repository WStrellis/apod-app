import React, { Component } from 'react'
import styled from "styled-components";

const RandomSVG = styled.svg`
  display : block;
  position: relative;
  height: 100%;
  width: 100%;
  stroke: ${ props => props.theme.colors.primaryBlue};
  fill: ${ props => props.theme.colors.primaryBlueTransparent};
  stroke-width: 0.15px; 
`;

export default class RandomIcon extends Component {
  render() {
    return (
      <RandomSVG className="icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 9.567 7.374">
         <path d="M2.117 0v1.08h3.28c.657 0 .942.328.942.814 0 .487-.254.847-.825.847h-.688c-.857 0-1.185.434-1.185 1.249v.836h.963v-.603c0-.307.148-.498.508-.498h.614c1.206 0 1.725-.857 1.725-1.883C7.45.752 6.869 0 5.397 0zm1.407 5.905v1.44c1.406.13 1.207-.151 1.207-1.44z"/> 
      </RandomSVG>
    ) 
  }
}
