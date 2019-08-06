
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "../../styles/index.scss";
// import { mediaBP } from "../../styles/styles";
import styled from "styled-components";

import ImgBlock from "../img_block/img_block.jsx";
import Copyright from "../copyright/copyright.jsx";


const ImgWrapDiv = styled.div`
  max-height: 440px;
  max-width: 250px;
  border: 1px solid ${props => props.theme.colors.primaryPurple};
  background-color: ${props => props.theme.colors.primaryPurpleTransparent};
  padding: 10px;

  @media screen and ( ${props => props.theme.mediaBP.medium}){
    max-height:  470px;
    max-width: 700px;
  }

  @media screen and ( ${props => props.theme.mediaBP.large}){
    max-height:  620px;
    max-width: 90%;
`;


const MediaContainer = styled.div`
  max-width: max-content;
  margin: 0 auto;
`;

/**
  * Container for the photo or video of the day
 */

/**  @component */
export default class MediaWrapper extends Component {


  render() {
    return (
      <MediaContainer>
        <ImgWrapDiv>
            <ImgBlock url={this.props.url} title={this.props.title}></ImgBlock>
        </ImgWrapDiv>
        <Copyright copyright={this.props.copyright}/>
      </MediaContainer>
    )
  }
} // end MediaWrapper

MediaWrapper.propTypes = {
  /* URL : the url to the image */
  url : PropTypes.string,
  /* HDURL : the hdurl to the image */
  hdurl : PropTypes.string,
  /* Copyright : the creator of the image */
  copyright : PropTypes.string,
};

MediaWrapper.defaultProps = {
  url : "https://s3.amazonaws.com/wstrellis-images/test-pixels/light_green_pixel.gif",
  hdurl : "https://s3.amazonaws.com/wstrellis-images/test-pixels/light_green_pixel.gif",
  copyright : "Westley Strellis"
};
