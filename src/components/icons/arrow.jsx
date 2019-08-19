import React, { Component } from 'react'
import styled from "styled-components";

const ArrowSVG = styled.svg`
    display : block;
    position: relative;
    height: 100%;
    width: 100%;
    stroke: ${ props => props.theme.colors.primaryBlue};
    stroke-width: 1px;
`;

export default class ArrowIcon extends Component {
  render() {
    return (
     <ArrowSVG className="icon" style={ this.props.svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g ><path  d="M20.5 10.5L.5.5v5.036l20 4.964-20 4.695V20.5l20-10M40.5 62.5l-20-10v5.036l20 4.964-20 4.695V72.5l20-10" strokeLinejoin="round" fill="none"/></g></ArrowSVG> 
    )
  }
}
