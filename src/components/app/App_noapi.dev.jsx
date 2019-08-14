import React from "react";
import axios from "axios";
import Potd from "../potd/potd.jsx";
import fp_img from "./fairypillar.jpg";
import fish_img from "./clownfish.png";


/* ***************************************
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
THIS FILE IS FOR TESTING PURPOSES ONLY. DO NOT USE IN PRODUCTION
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
****************************************/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // loading : true,
      // set to false for testing
      loading : false,
      selectedDate : new Date(),
      pod  :{
        title: "Fairy Pillars",
        url : fish_img,
        // url : fp_img,
        copyright : "John Smith",
        explanation : " a really cool picture",
        media_type : "picture"
      }
    };
   
    this.changeDate = this.changeDate.bind(this);
    this.fetchAPODdata = this.fetchAPODdata.bind(this);
    }

    changeDate(d){
      this.setState({ 
        selectedDate : d
      })
      this.fetchAPODdata(d);
    }

    fetchAPODdata( inputDate ){
      // convert selectedDate to a format which can be used by the APOD API
      inputDate = inputDate.toJSON().slice(0, 10);

      // create a token which can be used to end api call
      const CancelToken= axios.CancelToken;
      const source = CancelToken.source(); 

      // axios.get(`https://api.nasa.gov/planetary/apod?api_key=gbxiSPUifzAqtMVLZiEswrVn0ikENJtIRYiNpVqy&date=${ inputDate}`,
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${ inputDate}`,
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
    }// end fetchAPODdata

  componentDidMount() {
    // this.fetchAPODdata( this.state.selectedDate );
      } // end componentDidMount

  render () {
    return (
      <Potd err={this.state.err }  pod={this.state.pod} loading={this.state.loading} cb={this.changeDate} date={this.state.selectedDate}/>
    )
  } // end  render


} // end App

export default App;
