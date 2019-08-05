import React, { Component } from 'react';
import styled from "styled-components";

const LogoContainer = styled.div`
  display: inline-block;
  border: 1px solid red;
  padding: 10px 20px;
`;

export default class Logo extends Component {

  render() {
    return (
      <LogoContainer>
        <h1>NASA</h1>
      </LogoContainer>
    )
  }
}
