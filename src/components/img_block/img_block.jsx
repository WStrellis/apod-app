import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Renders the photo of the day
 */

const StyledImg = styled.img`
  height: auto;
  max-width: 100%;
  object-fit: contain;
  max-height: 400px;

  @media screen and ( ${props => props.theme.mediaBP.medium}){
    max-height: 600px;
  };

  @media screen and ( ${props => props.theme.mediaBP.large}){
    max-height: 700px;
`;

 /** @components */
export default class ImgBlock extends Component {

  render() {
    return (
       <StyledImg src={this.props.url} title={this.props.title} alt={this.props.title}></StyledImg>
    )
  }
}// end ImgBlock

ImgBlock.propTypes = {
  /* URL : the url to the image */
  url : PropTypes.string,
  title : PropTypes.string
};
