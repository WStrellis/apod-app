import React , { Component } from 'react';
import { ThemeProvider } from "styled-components";

/* This file provides global css classes and variables for use in styled components  */

const theme = {
  mediaBP : {
    small : "max-width: 450px",
    medium : "min-width: 768px",
    large : "min-width: 1200px" 
   },
   colors :  {
    primaryBlue: "rgba( 3, 227, 235, 1);",
    primaryBlueTransparent: "rgba( 3, 227, 235, 0.16);",
    primaryPurple: "rgba( 83, 7, 134, 1);",
    primaryPurpleTransparent: "rgba( 83, 7, 134, 0.16);",
    disabledLight: "#808080",
    disabledDark: "#101010",
   },
   type : {
     muli : "font-family: 'Muli', sans-serif;"
   }
}

export default class Theme extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        { this.props.children } 
      </ThemeProvider>
    )
  }
};
