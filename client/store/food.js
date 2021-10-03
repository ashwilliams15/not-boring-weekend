const SET_FOOD = 'SET_FOOD'

const _setFood = (food) => ({
  type: SET_FOOD,
  food
})

export const setFood = (food) => {
  return (dispatch) => {
    dispatch(_setFood(food))
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case SET_FOOD:
      return action.food
    default:
      return state
  }
}
