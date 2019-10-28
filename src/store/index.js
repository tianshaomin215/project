import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';

//1、不使用redux-thunk的时候
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

//2、使用redux-thunk中间件
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );
// const store = createStore(reducer, enhancer);

//3、使用redux-saga
// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(sagaMiddleware)
// );
// const store = createStore(reducer, enhancer);
// sagaMiddleware.run(sagas);

//4、使用react-redux
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;