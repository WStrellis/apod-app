import React, { Component } from 'react';
import styled from "styled-components";

const TitleContainer = styled.div`
  display: inline-block;
  border: 1px solid red;
  padding: 10px 20px;
  margin: 0 auto;
`;

export default class AppTitle extends Component {

  render() {
    return (
      <TitleContainer>
        <h1>Astronomy Photo of The Day</h1>
      </TitleContainer>
    )
  }
}
