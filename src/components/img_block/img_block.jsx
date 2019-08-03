import React, { Component } from 'react';
import styled from "styled-components";

const ImgDiv = styled.div`
  max-height: 60%;
  max-width: 80%;
  background-image: url(${props.url})
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default class ImgBlock extends Component {

  render() {
    return (
      <ImgDiv/>
    )
  }
}
