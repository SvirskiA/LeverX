const GRID_VIEW = 'GRID_VIEW';
const ROW_VIEW = 'ROW_VIEW';
const SET_USERS = 'SET_USERS';
const GET_ALL_USERS = 'GET_ALL_USERS';

let initialState = {
    users: [],
    isUserLoggedIn: !!JSON.parse(localStorage.getItem("user")),
    filteredUsers: [],
    isUsersLoadFailed: false,
    isViewGrid: true
};

const mainPageReduser = (state = initialState, action) => {

    switch (action.type) {
        case GRID_VIEW: {
            return {
                ...state,
                isViewGrid: true
            };
        }
        case ROW_VIEW: {
            return {
                ...state,
                isViewGrid: false
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case GET_ALL_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }

        default:
            return state;
    }

}

export const gridViewActionCreater = () => ({
    type: GRID_VIEW,
});
export const rowViewActionCreater = () => ({
    type: ROW_VIEW,
});

export const setUsersActionCreater = (users) => ({
    type: SET_USERS,
    users
});
export const getAllUsersActionCreater = (users) => {
    return {
        type: GET_ALL_USERS,
        payload: users,
    };
};


export default mainPageReduser;
