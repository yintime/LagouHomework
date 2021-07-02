import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

const sagaMiddleware=createSagaMiddleware()

//createStore(reducer对象)
export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)