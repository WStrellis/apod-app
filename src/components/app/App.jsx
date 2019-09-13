import React from "react";
// import Potd from "../potd/potd.jsx";
import AppWrapper from "../app_wrapper/app_wrapper.jsx";
import AppHeader from "../header/header.jsx";
import MediaWrapper from "../media_wrapper/media_wrapper.jsx"; 
import MediaTitle from "../media_title/media_title.jsx"; 
import Explanation from "../explanation/explanation.jsx";
import ImgControls from "../img_controls/img_controls.jsx";

import styled from  'styled-components';

import fetchAPODdata from '../../js/fetch_data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  
  @media screen and (${props => props.theme.mediaBP.large }){
    flex-direction: column-reverse; 
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
      modalOpen: false,
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
      this.fetchAPODdata(d);
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

    setModalState( bool ){
      this.setState({ 
        modalOpen : bool
      })
    }

  componentDidMount() {
    this.fetchAPODdata( this.setLoadingStatus, this.setErrorStatus, this.updatePODData, this.state.selectedDate );
      } // end componentDidMount

  renderLoading() {
    return (
      <AppWrapper>
        <AppHeader date={this.state.selectedDate} cb={this.state.cb}/>
        <div>...loading</div>
      </AppWrapper>
    )
  };

  renderSuccess() {
    // used to set up HD icon
    let hasHD = ( this.state.pod.url !== this.state.pod.hdurl && this.state.pod.hdurl !== null)? true : false

    return (
      <AppWrapper>
        <AppHeader  selectedDate={ this.state.selectedDate } cb={this.changeDate } />
        <MediaTitle mtitle={ this.state.pod.title }/>
        {/* <Modal /> */}
        <MediaWrapper 
          url={ this.state.pod.url }  
          hdurl={ this.state.pod.hdurl } 
          mediaType={ this.state.pod.media_type } 
          copyright={ this.state.pod.copyright}
          title={ this.state.pod.title }
          selectedDate={ this.state.selectedDate }
          cb={ this.changeDate }
          />
          <Container>
            <ImgControls  
            useHD={ this.state.useHD }
            selectedDate={this.props.selectedDate} 
            hdOption={ hasHD }
            hdInUse={ this.state.useHD}
            preferHDcb={ this.preferHD}
            noHDcb={ this.noHD}
            dateCB={ this.props.cb}
            />

          <Explanation explanation={ this.state.pod.explanation }/>
        </Container>
      </AppWrapper>
    )
  };

  renderError(){
    return (
      <AppWrapper>
        <p>{ this.state.errObject.message }</p>
      </AppWrapper>
    )
    }

  render (){
    if( this.state.loading ){
      return this.renderLoading();
    } else if ( this.state.pod ){
      return this.renderSuccess();
    } else if( this.state.error ) {
      return this.renderErr();
    }
  }
/*
  render () {
    return (
      <Potd 
        selectedDate={this.state.selectedDate}
        pod={this.state.pod} 
        loading={this.state.loading} 
        cb={this.changeDate} 
        />
    )
  } // end  render
*/

} // end App

export default App;
