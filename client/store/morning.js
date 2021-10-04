const SET_MORNING = 'SET_MORNING'


const _setMorning = (morning) => ({
  type: SET_MORNING,
  morning
})

export const setMorning = (morning) => {
  return (dispatch) => {
    dispatch(_setMorning(morning))
  }
}

export default function (state = [], action) {
  switch(action.type) {
    case SET_MORNING:
      return action.morning
    default:
      return state
  }
}
