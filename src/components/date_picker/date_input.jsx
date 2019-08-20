import React, { Component } from 'react'
import Styled from "styled-components";
import PropTypes from 'prop-types';
  
const DInput = Styled.button`
  max-width: 100px;
  overflow-x: hidden;
  color: white;
  text-align: center;
  background-color: ${ props => props.theme.colors.primaryBlueTransparent };
  border: 1px solid  ${ props => props.theme.colors.primaryBlue };
  
  @media screen and ( ${ props => props.theme.mediaBP.medium} ){
    width: 150px;
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
