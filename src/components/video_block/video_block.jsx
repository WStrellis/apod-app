import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Renders the photo of the day if it is a video
 */

const StyledIF = styled.iframe`
  width: 350px;
  height: 350px;

  @media screen and ( ${ props => props.theme.mediaBP.medium } ){
    width: 750px;
    height: 421px;
  };

  @media screen and ( ${ props => props.theme.mediaBP.large } ){
    width: 1150px;
    height: 657px;
  };
`;

 /** @components */
export default class VidBlock extends Component {

  render() {
    return (
         <StyledIF src={ this.props.url } frameborder="0" title= { this.props.title } allowFullScreen></StyledIF>
    )
  }
}// end VidBlock

VidBlock.propTypes = {
  /* URL : the url to the image */
  url : PropTypes.string,
  title : PropTypes.string
};
