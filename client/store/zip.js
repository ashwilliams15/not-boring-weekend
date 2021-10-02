const SET_ZIP = 'SET_ZIP';

const _setZip = (zip) => ({
  type: SET_ZIP,
  zip
})

export const setZip = (zip) => {
  return (dispatch) => {
    dispatch(_setZip(zip))
  }
}

export default function (state = '', action) {
  switch(action.type) {
    case SET_ZIP:
      return action.zip
    default:
      return state
  }
}
