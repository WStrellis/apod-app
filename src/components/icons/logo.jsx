import React, { Component } from 'react';
import styled from "styled-components";
import appLogo from  "./app_logo.png";

const LogoImg = styled.img`
  height: 75px;
  width: auto;
  object-fit: contain;
  object-position: center;
`;

export default class Logo extends Component {

  render() {
    return (
      <div>
        <LogoImg src={appLogo} alt="Unofficial NASA APOD logo"></LogoImg>
      </div>
    )
  }
}
