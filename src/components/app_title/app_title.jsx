import React, { Component } from 'react';
import styled from "styled-components";

const TitleContainer = styled.div`
  display: inline-block;
  border: 1px solid red;
  padding: 10px 20px;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

export default class AppTitle extends Component {

  render() {
    return (
      <TitleContainer>
        <StyledH1>Astronomy Photo of The Day</StyledH1>
      </TitleContainer>
    )
  }
}
