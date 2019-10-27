import React from 'react'
import AppWrapper from '../app_wrapper/app_wrapper.jsx'
import AppHeader from '../header/header.jsx'
import MediaWrapper from '../media_wrapper/media_wrapper.jsx'
import Explanation from '../explanation/explanation.jsx'
import ImgControls from '../img_controls/img_controls.jsx'
import FullscreenModal from '../fullscreen-modal/fullscreen-modal.jsx'
import LoadingWrapper from '../loading/loading_wrapper'

import styled from 'styled-components'

import fetchAPODdata from '../../js/fetch_data'

import fp_img from './fairypillar.jpg'
import fish_img from './clownfish.png'

const POTDContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;

  @media screen and (${props => props.theme.mediaBP.large}) {
    padding: 2rem 2rem;
  }

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
  font-size: 4rem;
  text-align: center;
  ${props => props.theme.type.muli};
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      errData: null,
      pod: {
        title: 'Fairy Pillars',
        url: fish_img,
        hdurl: fp_img,
        copyright: 'John Smith',
        explanation:
          ' a really cool picture Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident dicta repudiandae ipsum sit exercitationem ab, tempora id dolorum facere totam. Quibusdam excepturi quis animi alias nemo dignissimos minima atque! Numquam inventore vero dolorum amet architecto labore repellendus quis, exercitationem illum voluptatum similique iure ab. Fugit cumque amet necessitatibus sunt, culpa doloremque minus assumenda cupiditate impedit sed officia neque ea quo adipisci blanditiis sit accusamus! Incidunt quos laboriosam sit deleniti tempora culpa voluptatum quidem nesciunt totam hic, expedita voluptatem eligendi nihil voluptatibus molestias? Totam ea doloribus maiores laboriosam, dolorem quasi non. Temporibus voluptas aperiam exercitationem, rerum a magni aspernatur dicta!a really cool picture Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident dicta repudiandae ipsum sit exercitationem ab, tempora id dolorum facere totam. Quibusdam excepturi quis animi alias nemo dignissimos minima atque! Numquam inventore vero dolorum amet architecto labore repellendus quis, exercitationem illum voluptatum similique iure ab. Fugit cumque amet necessitatibus sunt, culpa doloremque minus assumenda cupiditate impedit sed officia neque ea quo adipisci blanditiis sit accusamus! Incidunt quos laboriosam sit deleniti tempora culpa voluptatum quidem nesciunt totam hic, expedita voluptatem eligendi nihil voluptatibus molestias? Totam ea doloribus maiores laboriosam, dolorem quasi non. Temporibus voluptas aperiam exercitationem, rerum a magni aspernatur dicta!',
        media_type: 'image'
      },
      selectedDate: new Date(),
      isModalOpen: false,
      useHD: false
    }

    this.fetchAPODdata = fetchAPODdata.bind(this)
  }
  preferHD = () => {
    this.setState({ useHD: true })
  }
  noHD = () => {
    this.setState({ useHD: false })
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
    /*
    this.fetchAPODdata(
      this.setLoadingStatus,
      this.setErrorStatus,
      this.updatePODData,
      this.state.selectedDate
    )
    */
  } // end componentDidMount

  // <AppHeader date={this.state.selectedDate} cb={this.changeDate} />
  // <div>...loading</div>
  renderLoading() {
    return <LoadingWrapper />
  }

  renderSuccess() {
    // used to set up HD icon
    let hasHD =
      this.state.pod.url !== this.state.pod.hdurl &&
      this.state.pod.hdurl !== null &&
      this.state.pod.media_type !== 'video'
        ? true
        : false
    console.log(this.state.pod)
    console.log('process.env', process.env)
    return (
      <AppWrapper>
        <AppHeader
          selectedDate={this.state.selectedDate}
          cb={this.changeDate}
        />
        <MediaTitle>{this.state.pod.title}</MediaTitle>
        {this.state.isModalOpen && this.state.pod.media_type !== 'video' && (
          <FullscreenModal
            appState={this.state}
            hasHD={hasHD}
            preferHDcb={this.preferHD}
            noHDcb={this.noHD}
            dateCB={this.changeDate}
            setModalState={this.setModalState}
            url={this.state.useHD ? this.state.pod.hdurl : this.state.pod.url}
          />
        )}

        {(!this.state.isModalOpen || this.state.pod.media_type === 'video') && (
          <POTDContainer>
            <MediaWrapper
              appState={this.state}
              url={this.state.pod.url}
              hdurl={this.state.pod.hdurl}
              useHD={this.state.useHD}
              mediaType={this.state.pod.media_type}
              copyright={this.state.pod.copyright}
              title={this.state.pod.title}
              selectedDate={this.state.selectedDate}
              cb={this.changeDate}
            />
            <CntrlsTxtContainer>
              <Explanation
                explanation={this.state.pod.explanation}
                copyright={this.state.pod.copyright}
              />

              <ImgControls
                appState={this.state}
                hdOption={hasHD}
                preferHDcb={this.preferHD}
                noHDcb={this.noHD}
                dateCB={this.changeDate}
                setModalState={this.setModalState}
              />
            </CntrlsTxtContainer>
          </POTDContainer>
        )}
      </AppWrapper>
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
    if (this.state.loading || this.state.error) {
      return this.renderLoading()
    } else if (this.state.pod && !this.state.error) {
      return this.renderSuccess()
    }
  }
} // end App

export default App
