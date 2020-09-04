import { UPDATE_LOGIN_STATUS, SET_USER_ID } from "./login.actions";

const loginState = {
    userId: null,
    isLoggedIn: false

};

export default function(state = loginState, action) {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS: {
      const status = action.payload.status;
      console.log('**updating status', status);
      return {
        ...state,
        isLoggedIn: status
      };
    }
    case SET_USER_ID: {
        const userId = action.payload;
        return {
          ...state,
          userId: userId
        };
    }
    default:
      return state;
  }
}
