
import React, { Component } from 'react';

import styled from "styled-components";

import ImgBlock from "../img_block/img_block.jsx";
import VidBlock from "../video_block/video_block.jsx";
import Copyright from "../copyright/copyright.jsx";

// Position: relative  because copyright is absolutely positioned below
const ImgWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: max-content;
  border: 1px solid ${props => props.theme.colors.primaryPurple};
  background-color: ${props => props.theme.colors.primaryPurpleTransparent};
  margin: 0 auto;
  padding: 10px;
  width: max-content;
  max-width: 90%;

  @media screen and (${props => props.theme.mediaBP.medium}) {
    max-width: 70%;
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-grow: 1;
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
          { this.props.mediaType === 'video' && <VidBlock url={this.props.url} title={this.props.title}/> }
          { this.props.mediaType === 'image' &&  <ImgBlock imgSrc={ this.props.useHD ? this.props.hdurl : this.props.url} title={this.props.title}></ImgBlock>}
          { this.props.copyright && <Copyright copyright={this.props.copyright}/>}
        </ImgWrapDiv>
      </MediaContainer>
    )
  }
} // end MediaWrapper
