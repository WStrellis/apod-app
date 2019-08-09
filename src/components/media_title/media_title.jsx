import React, { Component } from 'react';
import styled from "styled-components";

const MTContainer = styled.div`
  text-align: center;
`;

export default class MediaTitle extends Component {

  render() {
    return (
      <MTContainer>
        <h1>{this.props.mtitle}</h1>
      </MTContainer>
    )
  }
}
