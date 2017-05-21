import {CHANGE_SELECT_FILTER, CHANGE_DATE_RANGE_FILTER} from '../constants'
const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}
export default (filters = defaultFilters, action) => {
  const {type, payload } = action;
  switch (type) {
    case CHANGE_SELECT_FILTER:
      return Object.assign({}, filters, {selected: payload.selected})
    case CHANGE_DATE_RANGE_FILTER:
      return Object.assign({}, filters, {dateRange: payload.dateRange})
  }
  return filters
}