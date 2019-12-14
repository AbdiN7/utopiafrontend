import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer'; //redux can only have a single reducer, so they are imported to reducer/index.js

const initialState = {};
const middleware = [thunk]

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store;

// for development purposes if the browser is chrome and Redux dev tools are enabled 
//than add redux dev tools window to the store 

if(window.navigator.userAgent.includes("Chrome")&&ReactReduxDevTools) {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware),
        ReactReduxDevTools
        )
    );
    console.log(store.gustId)
} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
}

export default store;


// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;
