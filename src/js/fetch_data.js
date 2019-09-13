import axios from 'axios';

export default function fetchAPODdata(  loadingCB, errCB, dataCB, inputDate ){
      // convert selectedDate to a format which can be used by the APOD API
      console.log("making api request");
      inputDate = inputDate.toJSON().slice(0, 10);

      // create a token which can be used to end api call
      const CancelToken= axios.CancelToken;
      const source = CancelToken.source(); 

      // axios.get(`https://api.nasa.gov/planetary/apod?api_key=gbxiSPUifzAqtMVLZiEswrVn0ikENJtIRYiNpVqy&date=${ inputDate}`,
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${ inputDate}`,
      { cancelToken : source.token }
      )
      // if the the server responds update App state
      .then( res =>{
        dataCB( res.data );
        loadingCB( false )
        // stop polling server after data has been received
        source.cancel();
      })
      // if there is an error show the error message
      .catch( err =>{
        errCB( false,)
        this.setState({loading : false, err})
      })
    }// end fetchAPODdata
