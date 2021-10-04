const SET_AFTERNOON = 'SET_AFTERNOON'

const _setAfternoon = (afternoon) => ({
  type: SET_AFTERNOON,
  afternoon
})

export const setAfternoon = (afternoon) => {
  return (dispatch) => {
    dispatch(_setAfternoon(afternoon))
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_AFTERNOON:
      return action.afternoon
    default:
      return state
  }
}
