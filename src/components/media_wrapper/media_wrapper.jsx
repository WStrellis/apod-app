
import React, { Component } from 'react'
import styled from "styled-components";
import styles from "../../styles/_variables.scss";
/* need to import child elements here */

export default class MediaWrapper extends Component {
  constructor(props){
    super(props);
    this.url = props.url;
    this.hdurl = props.hdurl;
    this.copyright = props.copyright;
  }

  render() {
    return (
      <div>
       {/* need to render child elements here */} 
      </div>
    )
  }
}
