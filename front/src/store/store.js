import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logInReduser from './login-reduser';
import mainPageReduser from './main-page-reduser';
import userPageReduser from './user-page-reduser';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    logInReduser,
    mainPageReduser,
    userPageReduser,
    // loggingReduser
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;