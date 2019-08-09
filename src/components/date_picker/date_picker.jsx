import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class DateSelector extends React.Component {

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
      />
    );
  }
}
