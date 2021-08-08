const SET_USER = 'SET_USER';

let initialState = {
    user: null,
    // isUsersLoadFailed: false,
};

const userPageReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }

        default:
            return state;
    }

}

export const setUserActionCreater = (user) => ({
    type: SET_USER,
    user
});


export default userPageReduser;
