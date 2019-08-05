import React, { Component } from 'react';
import styled from "styled-components";
import styles from "../../styles/_variables.scss";

import ImgBlock from "../img_block/img_block.jsx";

const ImgWrapDiv = styled.div`
  height: 400px;
  width: 400px;
  border: 1px solid #ff0000;
  padding: 10px;
`;

export default class ImgWrapper extends Component {

  render() {
    return (
      <ImgWrapDiv>
        <ImgBlock title={this.props.title} url={this.props.url} hdurl={this.props.hdurl}></ImgBlock>
      </ImgWrapDiv>
    )
  }
}
