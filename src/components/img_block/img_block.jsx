import React, { Component } from 'react';
import styled from "styled-components";

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: scale-down;
  object-position: center;
  image-rendering: crips-edges;
`;

const ImgWrapDiv = styled.div`
  height: 400px;
  width: 400px;
  border: 1px solid #ff0000;
  padding: 10px;
`;

export default class ImgBlock extends Component {

  render() {
    return (
      <ImgWrapDiv>
       <StyledImg src={this.props.url} ></StyledImg>
      </ImgWrapDiv>
    )
  }
}
