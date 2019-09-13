import React, { Component } from 'react';
import styled from "styled-components";

const MTContainer = styled.div`
  text-align: center;
  h1 {
    margin-top: 2rem;
    font-size: 4rem;
  }
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
