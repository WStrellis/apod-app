
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styled from "styled-components";

import ImgBlock from "../img_block/img_block.jsx";
import VidBlock from "../video_block/video_block.jsx";
import Copyright from "../copyright/copyright.jsx";
import ImgControls from "../img_controls/img_controls.jsx";

// Position: relative  because copyright is absolutely positioned below
const ImgWrapDiv = styled.div`
  display: flex;
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
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media screen and (${props => props.theme.mediaBP.medium}) {
    flex-direction: row;    
    justify-content: space-evenly;
  }
`;

/**
  * Container for the photo or video of the day
 */

/**  @component */
export default class MediaWrapper extends Component {
  constructor( props){
    super( props);
    this.state = {
      useHD : false,
    }

    this.preferHD = this.preferHD.bind(this);
    this.noHD = this.noHD.bind(this);
  }

  preferHD(){ this.setState({ useHD : true})  }
  noHD(){ this.setState({ useHD : false})  }

  render() {
    // used to set up HD icons
    let hasHD = ( this.props.url !== this.props.hdurl && this.props.hdurl !== null)? true : false;
    
    return (
      <MediaContainer>
        <ImgWrapDiv>
          { this.props.mediaType === 'video' && <VidBlock url={this.props.url} title={this.props.title}/> }
          { this.props.mediaType === 'image' &&  <ImgBlock imgSrc={ this.state.useHD ? this.props.hdurl : this.props.url} title={this.props.title}></ImgBlock>}
          { this.props.copyright && <Copyright copyright={this.props.copyright}/>}
        </ImgWrapDiv>
        <ImgControls  
          useHD={ this.state.useHD }
          selectedDate={this.props.selectedDate} 
          hdOption={ hasHD }
          hdInUse={ this.state.useHD}
          preferHDcb={ this.preferHD}
          noHDcb={ this.noHD}
          dateCB={ this.props.cb}
          />
      </MediaContainer>
    )
  }
} // end MediaWrapper
