import React, { Component } from 'react'
import { AppContext } from '../../context/AppContext'
import styled from 'styled-components'

const StyledIF = styled.iframe`
  width: 280px;
  height: 280px;

  @media screen and (${props => props.theme.mediaBP.medium}) {
    width: 750px;
    height: 421px;
  }

  @media screen and (${props => props.theme.mediaBP.large}) {
    width: 1150px;
    height: 657px;
  }
`

export default class VidBlock extends Component {
  render() {
    const { pod } = this.context
    return (
      <StyledIF
        src={pod.url}
        frameborder='0'
        title={pod.title}
        allowFullScreen
      ></StyledIF>
    )
  }
} // end VidBlock

VidBlock.contextType = AppContext
