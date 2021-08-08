const INPUT_EMAIL = 'INPUT_EMAIL';
const INPUT_PASSWORD = 'INPUT_PASSWORD';
const LOGIN_USER = 'LOGIN_USER';

let initialState = {
    email: '',
    password: '',
    wasLoginFailed: false,
    errorMessage: '',
    isUserLoggedIn: !!JSON.parse(localStorage.getItem("user")),
};

const logInReduser = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_EMAIL: {
            return {
                ...state,
                email: action.body
            };
        }
        case INPUT_PASSWORD: {
            return {
                ...state,
                password: action.body
            };
        }
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

export const inputEmailActionCreater = (body) => ({
    type: INPUT_EMAIL,
    body: body
});

export const inputPasswordActionCreater = (body) => ({
    type: INPUT_PASSWORD,
    body: body
});

export const loginUserActionCreater = (user) => ({
    type: LOGIN_USER,
    user: user
});

export default logInReduser;
