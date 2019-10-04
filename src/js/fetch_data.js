import axios from 'axios';

export function fetchData(  url ){
        axios
          .get(url)
          .then( res => res.data)

}// end fetchData

export default function fetchAPODdata(  loadingCB, errCB, dataCB, inputDate ){
    // convert selectedDate to a format which can be used by the APOD API
    inputDate = inputDate.toJSON().slice(0, 10);

    async  function getData(){
      // set state to loading
      loadingCB( true );
      try{
        // get data from NASA API
        const res =  await axios.get(`https://api.nasa.gov/planetary/apod?api_key=gbxiSPUifzAqtMVLZiEswrVn0ikENJtIRYiNpVqy&date=${ inputDate }`,
      // axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${ inputDate}`,
      )
        // update state with new data
          dataCB( res.data)
          // set loading to false
          loadingCB( false )
      }
      catch( err ){
        errCB( true, err)
        loadingCB( false )
      }
    }

    getData();
}// end fetchAPODdata
