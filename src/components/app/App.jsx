import React from "react";
import axios from "axios";
import styles from './App.module.scss';
import styled from "styled-components";

import Potd from "../potd/potd.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading : true}
    }

  componentDidMount() {
    // create a token which can be used to end api call
    const CancelToken= axios.CancelToken;
    const source = CancelToken.source(); 

    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    { cancelToken : source.token }
    )
    // if the the server responds show the results
    .then( res =>{
      this.setState({loading : false, pod: res.data})
      // stop polling server after data has been received
      source.cancel();
    })
    // if there is an error show the error message
    .catch( err =>{
      this.setState({loading : false, err})
    })
  } // end componentDidMount

  render () {
    return (
      <Potd {...this.state}/>
    )
  }
} // end App

export default App;
