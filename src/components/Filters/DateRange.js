import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {changeDateRangeFilter} from '../../AC/index'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const {changeDateRangeFilter} = this.props;
        changeDateRangeFilter(DateUtils.addDayToRange(day, this.props.dateRange))
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

function mapStateToProps(state) {
  return {
      dateRange: state.filters.dateRange
  }
}
export default connect(mapStateToProps, { changeDateRangeFilter })(DateRange)