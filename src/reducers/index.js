import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import movieReducer from './movieReducer'
import showReducer from './showReducer'
import itemReducer from './itemReducer'
import castReducer from './castReducer'
import genreReducer from './genreReducer'
import runtimeReducer from './runtimeReducer'
import taglineReducer from './taglineReducer'
import youtubeReducer from './youtubeReducer'
import creatorReducer from './creatorReducer'
import statusReducer from './statusReducer'
import modalReducer from './modalReducer'
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'


const rootReducer=combineReducers({
	auth:authReducer,
	users:userReducer,
	movies:movieReducer,
	shows:showReducer,
	items:itemReducer,
	casts:castReducer,
	genres:genreReducer,
	runtime:runtimeReducer,
	tagline:taglineReducer,
	youtubes:youtubeReducer,
	creator:creatorReducer,
	status:statusReducer,
	modal:modalReducer,
	form:formReducer,
	router:routerReducer
})
export default rootReducer