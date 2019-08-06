import React, { Component } from 'react';
import styled from "styled-components";
import AppTitle from "../app_title/app_title.jsx";
import Logo from "../icons/logo.jsx";
import DateSelector from "../date_picker/date_picker.jsx";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding: 10px 20px;
`;

export default class AppHeader extends Component {

  render() {
    return (
      <HeaderContainer>
        <Logo/>
        <AppTitle/>
        <DateSelector/>
      </HeaderContainer>
    )
  }
}
