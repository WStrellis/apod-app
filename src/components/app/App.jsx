import React from 'react'
import AppWrapper from '../app_wrapper/app_wrapper.jsx'
import AppHeader from '../header/header.jsx'
import MediaWrapper from '../media_wrapper/media_wrapper.jsx'
import Explanation from '../explanation/explanation.jsx'
import ImgControls from '../img_controls/img_controls.jsx'
import FullscreenModal from '../fullscreen-modal/fullscreen-modal.jsx'
import styled from 'styled-components'
import { AppContext } from '../../context/AppContext'

import fetchAPODdata from '../../js/fetch_data'

const POTDContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem 2rem 1rem;

  @media screen and (${props => props.theme.mediaBP.large}) {
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const CntrlsTxtContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 100%;

  @media screen and (${props => props.theme.mediaBP.large}) {
    height: 100%;
    width: 36%;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
  }
`

const MediaTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  padding: 0 1rem;
  ${props => props.theme.type.muli};
  @media screen and (${props => props.theme.mediaBP.medium}) {
    font-size: 3.25rem;
  }

  @media screen and (${props => props.theme.mediaBP.large}) {
    font-size: 4rem;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      errData: null,
      pod: null,
      selectedDate: new Date(),
      useHD: false,
      isModalOpen: false,
      setHD: this.setHD,
      setModalState: this.setModalState,
      changeDate: this.changeDate
    }

    this.fetchAPODdata = fetchAPODdata.bind(this)
  }

  setHD = () => {
    this.setState(state => {
      return { useHD: !state.useHD }
    })
  }

  changeDate = d => {
    this.setState({
      selectedDate: d
    })
    this.fetchAPODdata(
      this.setLoadingStatus,
      this.setErrorStatus,
      this.updatePODData,
      d
    )
  }

  setLoadingStatus = bool => {
    this.setState({
      loading: bool
    })
  }

  setErrorStatus = (bool, errObject) => {
    this.setState({
      error: bool,
      errData: errObject
    })
  }

  updatePODData = data => {
    this.setState({
      pod: data
    })
  }

  setModalState = () => {
    this.setState(state => {
      return { isModalOpen: !state.isModalOpen }
    })
  }

  componentDidMount() {
    this.fetchAPODdata(
      this.setLoadingStatus,
      this.setErrorStatus,
      this.updatePODData,
      this.state.selectedDate
    )
  } // end componentDidMount

  renderLoading() {
    return (
      <AppContext.Provider value={this.state}>
        <AppWrapper>
          <AppHeader />
          <div>...loading</div>
        </AppWrapper>
      </AppContext.Provider>
    )
  }
  renderSuccess() {
    console.log(this.state.pod)
    console.log('app state', this.state)
    return (
      <AppContext.Provider value={this.state}>
        <AppWrapper>
          <AppHeader />
          <MediaTitle>{this.state.pod.title}</MediaTitle>
          {this.state.isModalOpen && this.state.pod.media_type !== 'video' && (
            <FullscreenModal />
          )}

          {(!this.state.isModalOpen ||
            this.state.pod.media_type === 'video') && (
            <POTDContainer>
              <MediaWrapper />
              <CntrlsTxtContainer>
                <Explanation />
                <ImgControls />
              </CntrlsTxtContainer>
            </POTDContainer>
          )}
        </AppWrapper>
      </AppContext.Provider>
    )
  }

  renderError() {
    return (
      <AppWrapper>
        <p>An error has occured: {this.state.errData.message}</p>
      </AppWrapper>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading()
    } else if (this.state.pod && !this.state.error) {
      return this.renderSuccess()
    } else if (this.state.error) {
      return this.renderError()
    }
  }
} // end App

export default App
