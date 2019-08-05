
import React, { Component } from 'react';

import MediaWrapper from "../media_wrapper/media_wrapper.jsx"; 
import MediaTitle from "../media_title/media_title.jsx"; 
import Explanation from "../explanation/explanation.jsx"; 

export default class Potd extends Component {

  renderLoading() {
    return <div>...loading</div>
  };

  renderPotd() {
    const {title, copyright=null, url, date, explanation, media_type, hdurl } = this.props.pod;

    return (
      <>
        <MediaTitle mtitle={title}/>
        <MediaWrapper url={url} copyright={copyright}/>
        <Explanation explanation={explanation}/>
      </>
    )
  };

  renderErr(){
    return <div>An error occured: {this.props.err.message}</div>
    }
  
  render (){
    if( this.props.loading){
      return this.renderLoading();
    } else if (this.props.pod){
      return this.renderPotd();
    } else {
      return this.renderErr();
    }
  }
}
