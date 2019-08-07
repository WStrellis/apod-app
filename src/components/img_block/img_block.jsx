import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Renders the photo of the day
 */

const StyledImg = styled.img`
  height: auto;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
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