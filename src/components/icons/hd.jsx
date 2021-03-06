import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/style_variables.js'

const HDSVG = styled.svg`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  stroke-width: 0.4px;
`

export default class HDIcon extends Component {
  render() {
    let inlineStyles = {}
    let classes = ''

    // set css
    if (this.props.status === 'activate') {
      inlineStyles.stroke = colors.primaryBlue
      inlineStyles.fill = colors.primaryBlueTransparent
      classes = ' icon activate'
      // if user has HD selected keep icon highlighted
      if (this.props.useHD) {
        inlineStyles.filter = 'drop-shadow( 0px 0px 7px rgb(255, 0, 60) )'
      }
    } else if (this.props.status === 'disable') {
      inlineStyles.stroke = colors.disabledLight
      inlineStyles.fill = colors.disabledDarkTransparent
      classes = ' icon'
    }

    return (
      <HDSVG
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 13.146 7.144'
        className={classes}
        style={inlineStyles}
      >
        <path d='M.592 0C.195 0 .005.186 0 .567v6.01c.005.38.195.567.592.567h.657V5.776l-.001-.008V4.159h3.645v2.985h1.26V0h-1.26v2.91H1.248V1.376l.001-.007V0zM7.41 0c-.402 0-.593.19-.593.582v5.98c0 .391.19.582.593.582h2.519c2.095 0 3.217-1.164 3.217-3.567C13.146 1.164 12.014 0 9.93 0zm.656 1.376c0-.095.043-.127.138-.127h1.725c1.386 0 1.968.688 1.968 2.318 0 1.64-.582 2.328-1.968 2.328H8.204c-.095 0-.138-.032-.138-.127z' />
      </HDSVG>
    )
  }
}
