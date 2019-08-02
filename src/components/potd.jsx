
import React, { Component } from 'react';
import ImgFig from "./imgFig.jsx"; // takes url, title, and copyright as props
import PictureTitle from "./picture_title.jsx"; // takes title as props
import Explanation from "./explanation.jsx"; // takes explanation as props

export default class Potd extends Component {

  renderLoading() {
    return <div>...loading</div>
  };

  renderPotd() {
    const {title, copyright=null, url, date, explanation, media_type, hdurl } = this.props.pod;

    return (
      <>
        <PictureTitle pTitle={title}/>
        <ImgFig title={title} url={url} copyright={copyright}/>
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
