import React, { Component } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';
  
const DInput = styled.button`
  overflow-x: hidden;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  min-height: 45px;
  min-width: 100px;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
  border: 1px solid  ${ props => props.theme.colors.primaryBlue };
  transition: height 0.4s , width 0.4s;

  @media screen and ( ${ props => props.theme.mediaBP.medium} ){
    font-size: 2rem;
  }
  
  @media screen and ( ${ props => props.theme.mediaBP.large} ){
    max-width: 250px;
  }
`;

export default class DateInput extends Component {

  render() {
    return (
      <DInput onClick={ this.props.onClick }>
        { this.props.value }
      </DInput>
    )
  }
}

DateInput.propTypes = {
  onClick : PropTypes.func,
  value : PropTypes.string
};
