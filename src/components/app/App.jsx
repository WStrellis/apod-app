import React from "react";
import AppWrapper from "../app_wrapper/app_wrapper.jsx";
import AppHeader from "../header/header.jsx";
import MediaWrapper from "../media_wrapper/media_wrapper.jsx"; 
import MediaTitle from "../media_title/media_title.jsx"; 
import Explanation from "../explanation/explanation.jsx";
import ImgControls from "../img_controls/img_controls.jsx";
import FullscreenModal from '../fullscreen-modal/fullscreen-modal.jsx';

import styled from  'styled-components';

import fetchAPODdata from '../../js/fetch_data';

const POTDContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  
  @media screen and (${props => props.theme.mediaBP.large }){
    flex-grow: 1;
    flex-direction: row; 
    justify-content: space-evenly;
  }
`;

const CntrlsTxtContainer = styled.div`
  display: flex;
  flex-direction: column-reverse; 
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  padding: 0 2rem;
  
  @media screen and (${props => props.theme.mediaBP.large }){
    width: 30%;
    flex-direction: column;
    padding-right: 1rem;
  }
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading : true,
      error : false,
      errData: null,
      pod: null,
      selectedDate : new Date(),
      useHD : false,
      isModalOpen: false,
    };

    this.changeDate = this.changeDate.bind(this);
    this.fetchAPODdata = fetchAPODdata.bind(this);
    this.preferHD = this.preferHD.bind(this);
    this.noHD = this.noHD.bind(this); 
    this.setModalState = this.setModalState.bind( this );
    this.setLoadingStatus = this.setLoadingStatus.bind(this); 
    this.setErrorStatus = this.setErrorStatus.bind(this); 
    this.updatePODData = this.updatePODData.bind(this); 
    this.renderSuccess = this.renderSuccess.bind(this); 
    this.renderError = this.renderError.bind(this); 
    this.renderLoading = this.renderLoading.bind(this); 
    }

    preferHD(){ this.setState({ useHD : true})  }
    noHD(){ this.setState({ useHD : false})  }

    changeDate(d){
      this.setState({ 
        selectedDate : d
      })
      this.fetchAPODdata( this.setLoadingStatus, this.setErrorStatus, this.updatePODData, d);
    }

    setLoadingStatus( bool ){
      this.setState({ 
        loading : bool,
      })
    }

    setErrorStatus( bool, errObject ){
      this.setState({ 
        error : bool,
        errData : errObject
      })
    }

    updatePODData( data ){
      this.setState({ 
        pod : data
      })
    }

    setModalState( ){
      this.setState( state => { 
        return { isModalOpen :  !state.isModalOpen }
      })
    }

  componentDidMount() {
    this.fetchAPODdata( this.setLoadingStatus, this.setErrorStatus, this.updatePODData, this.state.selectedDate );
      } // end componentDidMount

  renderLoading() {
    return (
      <AppWrapper>
        <AppHeader date={this.state.selectedDate} cb={ this.changeDate }/>
        <div>...loading</div>
      </AppWrapper>
    )
  };

  renderSuccess() {

    // used to set up HD icon
    let hasHD = ( this.state.pod.url !== this.state.pod.hdurl && this.state.pod.hdurl !== null && this.state.pod.media_type !== 'video')? true : false

    return (
      <AppWrapper>
        <AppHeader  selectedDate={ this.state.selectedDate } cb={this.changeDate } />
        <MediaTitle mtitle={ this.state.pod.title }/>

        { this.state.isModalOpen &&  this.state.pod.media_type !== 'video' &&
        <FullscreenModal 
          appState={ this.state } 
          hasHD={ hasHD }
          preferHDcb={ this.preferHD}
          noHDcb={ this.noHD}
          dateCB={ this.changeDate}
          setModalState={ this.setModalState }
          url={ this.state.useHD ? this.state.pod.hdurl : this.state.pod.url }
          />}

        { (!this.state.isModalOpen || this.state.pod.media_type === 'video') && (
        <POTDContainer>
          <MediaWrapper 
            url={ this.state.pod.url }  
            hdurl={ this.state.pod.hdurl } 
            useHD={ this.state.useHD }
            mediaType={ this.state.pod.media_type } 
            copyright={ this.state.pod.copyright}
            title={ this.state.pod.title }
            selectedDate={ this.state.selectedDate }
            cb={ this.changeDate }
            />
            <CntrlsTxtContainer>
              <Explanation explanation={ this.state.pod.explanation } copyright={ this.state.pod.copyright}/>

              <ImgControls  
              appState={ this.state } 
              hdOption={ hasHD }
              preferHDcb={ this.preferHD}
              noHDcb={ this.noHD}
              dateCB={ this.changeDate}
              setModalState={ this.setModalState }
              />
          </CntrlsTxtContainer>
        </POTDContainer>
        )}
      </AppWrapper>
    )
  };

  renderError(){
    return (
      <AppWrapper>
        <p>An error has occured: { this.state.errData.message }</p>
      </AppWrapper>
    )
    }

  render (){
    if( this.state.loading ){
      return this.renderLoading();
    } else if ( this.state.pod && !this.state.error ){
      return this.renderSuccess();
    } else if( this.state.error ) {
      return this.renderError();
    }
  }

} // end App

export default App;
