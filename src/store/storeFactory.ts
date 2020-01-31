import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import { History } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './sagas'
import { Reducers, StoreState } from './reducers'
// ______________________________________________________
//
export function storeFactory(
  history: History<History.PoorMansUnknown>,
  reducers: Reducers
): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  )
  sagaMiddleware.run(rootSaga(store))
  return store
}
