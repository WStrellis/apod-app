import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { star_config } from './star_config'

export default class StarBG extends Component {
  constructor(props) {
    super(props)
    this.windowWidth = 0
    this.windowHeight = 0
  }

  setWindowSize = size => {
    this.setState(state => {
      return { ...state, windowWidth: size }
    })
  }
  componentDidUpdate() {
    const height = window.innerHeight
    const width = window.innerWidth
    console.log(width, height)
    if (this.windowWidth !== width) {
      // this.setWindowSize(width)
    }
    // this.setWindowSize([width, height])
  }
  render() {
    console.log('windowWidth', this.windowWidth)
    return (
      <Particles
        width={window.innerWidth}
        height={window.innerHeight}
        params={star_config}
        style={{ position: 'absolute' }}
      />
    )
  }
}
