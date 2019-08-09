import React, { Component } from 'react';
import styled from "styled-components";

// components
import AppTitle from "../app_title/app_title.jsx";
import DateSelector from "../date_picker/date_picker.jsx";

// graphics
import Logo from "../icons/logo.jsx";

  // background-color: ${ props => props.theme.colors.primaryBlueTransparent};
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow:  0;
  padding: 10px 20px;
  background: rgba(3,227,235,0.45);
  background: -moz-linear-gradient(top, rgba(3,227,235,0.45) 0%, rgba(2,91,179,0) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(3,227,235,0.45)), color-stop(100%, rgba(2,91,179,0)));
  background: -webkit-linear-gradient(top, rgba(3,227,235,0.45) 0%, rgba(2,91,179,0) 100%);
  background: -o-linear-gradient(top, rgba(3,227,235,0.45) 0%, rgba(2,91,179,0) 100%);
  background: -ms-linear-gradient(top, rgba(3,227,235,0.45) 0%, rgba(2,91,179,0) 100%);
  background: linear-gradient(to bottom, rgba(3,227,235,0.45) 0%, rgba(2,91,179,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03e3eb', endColorstr='#025bb3', GradientType=0 );
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
