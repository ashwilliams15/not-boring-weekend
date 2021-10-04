const SET_DINNER = 'SET_DINNER'

const _setDinner = (dinner) => ({
  type: SET_DINNER,
  dinner
})

export const setDinner = (dinner) => {
  return (dispatch) => {
    dispatch(_setDinner(dinner))
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_DINNER:
      return action.dinner
    default:
      return state
  }
}
