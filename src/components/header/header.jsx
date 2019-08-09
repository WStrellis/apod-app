import React, { Component } from 'react';
import styled from "styled-components";

// components
import AppTitle from "../app_title/app_title.jsx";
import DateSelector from "../date_picker/date_picker.jsx";

// graphics
import Logo from "../icons/logo.jsx";
import Fade_Rect from "../../svg/fade_rect.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid ${ props => props.theme.colors.primaryBlue};
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
`;

export default class AppHeader extends Component {

  render() {
    return (
      <HeaderContainer>
        <Logo/>
        <AppTitle/>
        <DateSelector date={this.props.date} cb={this.props.cb}/>
      </HeaderContainer>
    )
  }
}
