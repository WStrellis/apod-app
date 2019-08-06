import React, { Component } from 'react';
import styled from "styled-components";
import appLogo from  "./app_logo.png";

const LogoContainer = styled.div`
  display: inline-block;
  border: 1px solid red;
  padding: 10px ;
`;

const LogoImg = styled.img`
  height: 75px;
  width: auto;
  object-fit: contain;
  object-position: center;
`;

export default class Logo extends Component {

  render() {
    return (
      <LogoContainer>
        <LogoImg src={appLogo} alt="Unofficial NASA APOD logo"></LogoImg>
      </LogoContainer>
    )
  }
}
