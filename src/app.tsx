import { createBrowserHistory } from 'history'
import { storeFactory } from './store'
import { reducersFactory } from './store/reducers'
import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'
// ______________________________________________________
//
const history = createBrowserHistory()
const store = storeFactory(history, reducersFactory(history))
// ______________________________________________________
//
ReactDom.render(
  <App history={history} store={store} />,
  document.getElementById('app')
)
