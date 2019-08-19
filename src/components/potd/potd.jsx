
import React, { Component } from 'react';

import AppWrapper from "../app_wrapper/app_wrapper.jsx";
import AppHeader from "../header/header.jsx";
import MediaWrapper from "../media_wrapper/media_wrapper.jsx"; 
import MediaTitle from "../media_title/media_title.jsx"; 
import Explanation from "../explanation/explanation.jsx";

export default class Potd extends Component {

  /* 
  err.response.status: 500
  Internal server error 
  */
  renderLoading() {
    return (
      <AppWrapper>
        <AppHeader date={this.props.date} cb={this.props.cb}/>
        <div>...loading</div>
      </AppWrapper>
    )
  };

  renderSuccess() {
    const {title, copyright=null, url, explanation, media_type, hdurl=null } = this.props.pod;

    return (
      <AppWrapper>
        <AppHeader date={this.props.date} cb={this.props.cb} availableDates={ this.props.availableDates}/>
        <MediaTitle mtitle={title}/>
        <MediaWrapper url={url} hdurl={hdurl} copyright={copyright} media_type={media_type} />
        <Explanation explanation={explanation}/>
      </AppWrapper>
    )
  };

  renderErr(){
    return (
      <AppWrapper>
        <p>An error occured</p>
      </AppWrapper>
    )
    }

  render (){
    if( this.props.loading){
      return this.renderLoading();
    } else if (this.props.pod){
      return this.renderSuccess();
    } else {
      return this.renderErr();
    }
  }
}
