import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "./date_input.jsx";

export default class DateSelector extends React.Component {
   
  render() {
    return (
      <DatePicker
        customInput={ <DateInput/> }
        selected={this.props.date}
        onChange={this.props.cb}
        // only days from June 16 ,1995 to current day are selectable
        maxDate={ new Date() }
        minDate={ new Date( 1995, 5, 16 )}
        dateFormat="MMMM, d yyyy"
        // display the datepicker as a modal
        withPortal
        // without FixedHeight the calender changes size depending on the  # of days in the selected month
        fixedHeight
        //enable year/month dropdown
        showYearDropdown 
        showMonthDropdown
        // scrollableYearDropdown
        dropdownMode="select"
      />
    );
  }
}
