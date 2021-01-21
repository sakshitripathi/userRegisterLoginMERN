import { Types } from '../constants/actionTypes';

const initialState = {
}

const reducer = (state = initialState, action) => {
  console.log('action')
  console.log(action)
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        'loggeduser' : action.payload.user.email
      }
    case Types.ADD_USER:
      return {
        ...state,
        [action.payload.user.email]:action.payload.user
      }
    default:
      return state;
  }
}

export default reducer;