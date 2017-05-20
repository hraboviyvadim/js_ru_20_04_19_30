import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Calendar extends React.Component {
  state = {
    from: null,
    to: null
  };
  handleDayClick = (day, {selected}) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };
  render() {
    const {from, to} = this.state;
    return (
      <div>
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, {from, to}]}
          onDayClick={this.handleDayClick}
        />
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from && to && <p> You choose from {from.toLocaleString()} to {to.toLocaleString()}.</p>}
      </div>
    )
  }
}
export default Calendar;
