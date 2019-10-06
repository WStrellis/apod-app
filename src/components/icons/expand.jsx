import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/style_variables.js'

const ExpandSVG = styled.svg`
  display: block;
  position: relative;
  margin: 3px;
  stroke-width: 0.6;
`

export default class ExpandIcon extends Component {
  render() {
    const inlineStyles = {}
    let classes = ''

    if (this.props.status === 'activate') {
      inlineStyles.stroke = colors.primaryBlue
      classes = 'icon activate'
    } else {
      inlineStyles.stroke = colors.disabledLight
      classes = 'icon'
    }

    return (
      <ExpandSVG
        className={classes}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 5.292 5.292'
        style={inlineStyles}
      >
        <path
          d='M3.565.403H4.89v1.323m0 1.84v1.323H3.565m-1.839 0H.403V3.565m0-1.839V.403h1.323'
          fill='none'
          strokeLinecap='square'
        />
      </ExpandSVG>
    )
  }
}
