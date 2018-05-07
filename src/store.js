import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerReducer, ConnectedRouter } from 'react-router-redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: (state = {} , action) => {
    console.log('state: ', state)
    console.log('action:' , action)

    switch (action.type) {
      case 'ALERT_ACTION':
        console.log('-=-=-=-=-= ALERT_ACTION -=-=-=-=-=')
        return {
          result: 'action.payload'
        }
      default:
        return state
    }
  }

})

const middleware = [
  thunk
]
const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const initialState = {}
const store = createStore(
  reducers,
  initialState,
  composedEnhancers
)

export default store
