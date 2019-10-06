import React, { Component } from 'react'

import styled from 'styled-components'

import ImgBlock from '../img_block/img_block.jsx'
import VidBlock from '../video_block/video_block.jsx'

const ImgWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: max-content; */
  /* width: max-content; */
  height: 100%;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.primaryBlue};
  background-color: ${props => props.theme.colors.primaryBlueTransparent};
  margin: 0 auto;
  padding: 10px;

  @media screen and (${props => props.theme.mediaBP.medium}) {
  }
`

const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media screen and (${props => props.theme.mediaBP.large}) {
    height: 100%;
    max-width: 62%;
    align-self: flex-start;
  }
`
const MediaTitle = styled.h1`
  font-size: 4rem;
`

export default class MediaWrapper extends Component {
  render() {
    return (
      <MediaContainer>
        <ImgWrapDiv>
          {this.props.mediaType === 'video' && (
            <VidBlock url={this.props.url} title={this.props.title} />
          )}
          {this.props.mediaType === 'image' && (
            <ImgBlock
              imgSrc={this.props.useHD ? this.props.hdurl : this.props.url}
              title={this.props.title}
            ></ImgBlock>
          )}
        </ImgWrapDiv>
      </MediaContainer>
    )
  }
} // end MediaWrapper
