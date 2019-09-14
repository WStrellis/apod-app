import React, { Component } from 'react';
import styled from "styled-components";

const StyledH1 = styled.h1`
  flex-grow: 0;
  display: none;
  text-align: center;
  font-size: 5rem;

  @media screen and ( ${props => props.theme.mediaBP.medium}){
    display: block;
  }
`;

export default class AppTitle extends Component {

  render() {
    return (
        <StyledH1>Astronomy Photo of The Day</StyledH1>
    )
  }
}
