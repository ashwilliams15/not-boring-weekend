const SET_LUNCH = 'SET_LUNCH'

const _setLunch = (lunch) => ({
  type: SET_LUNCH,
  lunch
})

export const setLunch = (lunch) => {
  return (dispatch) => {
    dispatch(_setLunch(lunch))
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_LUNCH:
      return action.lunch
    default:
      return state
  }
}
