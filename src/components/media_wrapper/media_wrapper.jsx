
import React, { Component } from 'react';

import styled from "styled-components";

import ImgBlock from "../img_block/img_block.jsx";
import Copyright from "../copyright/copyright.jsx";
// import ImgWrapper from "../img_wrapper/img_wrapper.jsx";

export default class MediaWrapper extends Component {

  render() {
    return (
      <div>
          <ImgBlock src={this.props.url}></ImgBlock>
          <Copyright copyright={this.props.copyright}/>
      </div>
    )
  }
}
