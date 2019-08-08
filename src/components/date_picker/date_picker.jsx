import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class DateSelector extends React.Component {
 /*  
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 */ 
/* 
  handleChange(date) {
    this.setState({
      startDate: date
    });
   }
*/
  render() {
    return (
      <DatePicker
        selected={this.props.date}
        onChange={this.props.cb}
        dateFormat="MMMM, d yyyy"
        // display the datepicker as a modal
        withPortal
        //enable year dropdown
        showYearDropdown 
        scrollableYearDropdown
        // yearDropdownItemNumber={10}
      />
    );
  }
}
