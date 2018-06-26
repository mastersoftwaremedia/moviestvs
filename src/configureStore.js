import {createStore,compose,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import reduxThunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import {verifyAuth} from './actions'

export const history=createHistory()

export function configureStore(initialState){
	const middlewares=[
		createLogger(),reduxThunk,routerMiddleware(history)
	]
	const store=createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(...middlewares),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	)
	if(module.hot){
		module.hot.accept('./reducers',()=>{
			const nextRootReducer=require('./reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}
	store.dispatch(verifyAuth())
	return store
}