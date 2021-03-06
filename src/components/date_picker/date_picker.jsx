import React from 'react'
import { AppContext } from '../../context/AppContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DateInput from './date_input.jsx'
import './date_picker-styles.scss'

export default class DateSelector extends React.Component {
  constructor(props) {
    super(props)
    this.currentDate = new Date()
    this.earliestDate = new Date(1995, 5, 16)
  }

  render() {
    let { selectedDate, changeDate } = this.context

    return (
      <DatePicker
        customInput={<DateInput />}
        selected={selectedDate}
        onChange={changeDate}
        // only days from June 16 ,1995 to current day are selectable
        maxDate={this.currentDate}
        minDate={this.earliestDate}
        dateFormat='MMMM d, yyyy'
        // display the datepicker as a modal
        withPortal
        // without FixedHeight the calender changes size depending on the  # of days in the selected month
        fixedHeight
        //enable year/month dropdown
        showYearDropdown
        showMonthDropdown
        // scrollableYearDropdown
        dropdownMode='select'
      />
    )
  }
}

DateSelector.contextType = AppContext
