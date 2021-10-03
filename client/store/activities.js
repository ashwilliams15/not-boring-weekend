const SET_ACTIVITIES = 'SET_ACTIVITIES'


const _setActivities = (activities) => ({
  type: SET_ACTIVITIES,
  activities
})

export const setActivities = (activities) => {
  return (dispatch) => {
    dispatch(_setActivities(activities))
  }
}

export default function (state = [], action) {
  switch(action.type) {
    case SET_ACTIVITIES:
      return action.activities
    default:
      return state
  }
}
