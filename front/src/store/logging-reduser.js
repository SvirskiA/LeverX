const LOGIN_USER = 'LOGIN_USER';

let initialState = {
    isUserLoggedIn: !!JSON.parse(localStorage.getItem("user")),
};

const loggingReduser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                isUserLoggedIn: !!action.user
            };
        }

        default:
            return state;
    }
}

export const loginUserActionCreater = (user) => ({
    type: LOGIN_USER,
    user: user
});

export default loggingReduser;
