import React, { Component } from 'react'
import styled from "styled-components";
import { colors } from "../../styles/style_variables.js";

const ArrowBase = styled.svg`
    display : block;
    position: relative;
    height: 100%;
    width: 100%;
    stroke-width: 1px;
`;

export default class ArrowIcon extends Component {

  render() {
    let inlineStyles = {};
    let classes = ""

    // set color and hover effect
    if(this.props.status === "activate"){
      inlineStyles.stroke =  colors.primaryBlue;
      classes = " icon activate"
    }else if( this.props.status === "disable"){
      inlineStyles.stroke = colors.disabledLight;
      classes = " icon"
    }

    // set orientation
    if(this.props.direction === "left"){
      inlineStyles.transform = "rotate(180deg)" 
      inlineStyles.left = " -5px"
    }else if( this.props.direction === "right"){
      inlineStyles.transform = "rotate(0deg)" 
      inlineStyles.left = " 5px"
    }

    return (
     <ArrowBase   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" 
      style={ inlineStyles } 
      className={ classes }>
       <path  d="M20.5 10.5L.5.5v5.036l20 4.964-20 4.695V20.5l20-10M40.5 62.5l-20-10v5.036l20 4.964-20 4.695V72.5l20-10" strokeLinejoin="round" fill="none"/>
       </ArrowBase> 
    )
  }
}
