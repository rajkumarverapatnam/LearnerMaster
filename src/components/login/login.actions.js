export const UPDATE_LOGIN_STATUS = "UPDATE_LOGIN_STATUS";
export const updateLoginStatus = (status) => ({
    type: UPDATE_LOGIN_STATUS,
    payload: {
        "status": status
    }
});

export const SET_USER_ID = "SET_USER_ID";
export const setUserId = (id) => ({
    type: SET_USER_ID,
    payload: {
        "userId": id
    }
});
