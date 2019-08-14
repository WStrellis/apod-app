
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

import ImgBlock from "../img_block/img_block.jsx";
import VidBlock from "../video_block/video_block.jsx";
import Copyright from "../copyright/copyright.jsx";

// Position: relative  because copyright is absolutely positioned below
const ImgWrapDiv = styled.div`
  display: flex;
  position: relative;
  height: max-content;
  max-width: max-content;
  border: 1px solid ${props => props.theme.colors.primaryPurple};
  background-color: ${props => props.theme.colors.primaryPurpleTransparent};
  margin: 0 auto;
  padding: 10px;
  width: max-content;
  max-width: 80%;

  @media screen and ( ${props => props.theme.mediaBP.medium}){
    max-width: 90%;
  };

  @media screen and ( ${props => props.theme.mediaBP.large}){
    max-width: 90%;
  };
`
  

const MediaContainer = styled.div`
  width: 100%
  margin: 20px auto;
  flex-grow: 1;
`;

/**
  * Container for the photo or video of the day
 */

/**  @component */
export default class MediaWrapper extends Component {


  render() {
     let media = ( this.props.media_type === "video")?
        <VidBlock url={this.props.url} title={this.props.title}/> :
        <ImgBlock url={this.props.url} title={this.props.title}></ImgBlock>;
    
    return (
      <MediaContainer>
        <ImgWrapDiv>
          { media }
          { this.props.copyright && <Copyright copyright={this.props.copyright}/>}
        </ImgWrapDiv>
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
