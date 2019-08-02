import React, { Component } from 'react'
import ImgFigCaption from "./imgFigCaption.jsx";

export default class ImgFig extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.url} alt={this.props.title}/>
        {this.props.copyright && <ImgFigCaption copyright={this.props.copyright}/>}
      </figure>
    )
  }
}
