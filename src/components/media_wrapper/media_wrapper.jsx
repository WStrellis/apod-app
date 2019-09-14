
import React, { Component } from 'react';

import styled from "styled-components";

import ImgBlock from "../img_block/img_block.jsx";
import VidBlock from "../video_block/video_block.jsx";

const ImgWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  height: max-content;
  border: 1px solid ${props => props.theme.colors.primaryBlue};
  background-color: ${props => props.theme.colors.primaryBlueTransparent};
  margin: 0 auto;
  padding: 10px;
  width: max-content;
  max-width: 90%;

  @media screen and (${props => props.theme.mediaBP.medium}) {
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  margin: 2rem auto ;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 0 1rem;

  @media screen and (${props => props.theme.mediaBP.large}) {
    max-width: 60%;
    align-self: flex-start;
  }
`;

/**
  * Container for the photo or video of the day
 */

          // { this.props.copyright && <Copyright copyright={this.props.copyright}/>}
/**  @component */
export default class MediaWrapper extends Component {

  render() {
    
    return (
      <MediaContainer>
        <ImgWrapDiv>
          { this.props.mediaType === 'video' && <VidBlock url={this.props.url} title={this.props.title}/> }
          { this.props.mediaType === 'image' &&  <ImgBlock imgSrc={ this.props.useHD ? this.props.hdurl : this.props.url} title={this.props.title}></ImgBlock>}
        </ImgWrapDiv>
      </MediaContainer>
    )
  }
} // end MediaWrapper
