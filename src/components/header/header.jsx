import React, { Component } from 'react';
import styled from "styled-components";
import AppTitle from "../app_title/app_title.jsx";

const HeaderContainer = styled.div`
  border: 1px solid red;
  padding: 10px 20px;
`;

export default class Header extends Component {

  render() {
    return (
      <HeaderContainer>
        <AppTitle/>
      </HeaderContainer>
    )
  }
}
