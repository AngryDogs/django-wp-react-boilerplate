import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/root'
import router from './router'

require("../style/main.scss");


function main() {

  const target = document.getElementById('target')
  const devTools = window.devToolsExtension ? window.devToolsExtension() : (variable) => variable
  const finalCreateStore = compose(applyMiddleware(thunk), devTools)(createStore)
  const store = finalCreateStore(rootReducer)
  render(
    <Provider store={store}>
      {router}
    </Provider>
  , target)
}

main()
