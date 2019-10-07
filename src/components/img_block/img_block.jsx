import React, { Component } from 'react'
import { AppContext } from '../../context/AppContext'
import styled from 'styled-components'

/**
 * Renders the photo of the day
 */

const StyledImg = styled.img`
  height: auto;
  /* max-width: 100%; */
  width: 100%;
  object-fit: cover;
  max-height: 400px;

  @media screen and (${props => props.theme.mediaBP.medium}) {
    max-height: 600px;
  }

  @media screen and (${props => props.theme.mediaBP.large}) {
    max-height: 700px;
  }
`

export default class ImgBlock extends Component {
  render() {
    const { pod, useHD } = this.context
    let imgSrc = useHD ? pod.hdurl : pod.url

    return (
      <StyledImg src={imgSrc} title={pod.title} alt={pod.title}></StyledImg>
    )
  }
} // end ImgBlock

ImgBlock.contextType = AppContext
