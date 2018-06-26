import {SEARCH_SHOWS} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case SEARCH_SHOWS:
			return action.payload
		default:
			return state
	}
}