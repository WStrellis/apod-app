import React, { Component } from 'react'
import styled from 'styled-components'
import ImgControls from '../img_controls/img_controls'

const ModalBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #000;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (${props => props.theme.mediaBP.medium}) {
    justify-content: flex-end;
    padding: 0 2rem 1rem 0;
  }
`

export default class FullscreenModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showControls: false
    }
  }

  render() {
    return (
      <ModalBody style={{ backgroundImage: `url( ${this.props.url} )` }}>
        <ImgControls
          appState={this.props.appState}
          hdOption={this.props.hasHD}
          preferHDcb={this.props.preferHDcb}
          noHDcb={this.props.noHDcb}
          dateCB={this.props.dateCB}
          setModalState={this.props.setModalState}
        />
      </ModalBody>
    )
  }
}
