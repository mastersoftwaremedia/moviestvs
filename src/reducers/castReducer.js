import {FETCH_CASTS} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_CASTS:
			return action.payload
		default:
			return state
	}
}