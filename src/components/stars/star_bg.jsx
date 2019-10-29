import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { star_config } from './star_config'

export default class StarBG extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    }
  }

  setWindowSize = () => {
    let width = window.innerWidth
    // let height = window.innerHeight
    let height = document.body.offsetHeight
    if (this.state.innerWidth !== width || window.innerHeight !== height) {
      this.setState({ windowWidth: width, windowHeight: height })
    }
  }

  componentDidMount() {
    this.setWindowSize()
    window.addEventListener('resize', this.setWindowSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWindowSize)
  }

  render() {
    return (
      <Particles
        width={window.innerWidth}
        height={window.innerHeight}
        params={star_config}
        className={'star_container'}
      />
    )
  }
}
