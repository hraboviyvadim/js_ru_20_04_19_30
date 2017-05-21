import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECT_FILTER, CHANGE_DATE_RANGE_FILTER} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function changeSelectFilter(value) {
    return {
        type: CHANGE_SELECT_FILTER,
        payload: { selected: value }
    }
}

export function changeDateRangeFilter(dateRange) {
  return {
    type: CHANGE_DATE_RANGE_FILTER,
    payload: { dateRange }
  }
}