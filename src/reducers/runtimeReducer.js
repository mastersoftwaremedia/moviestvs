import {FETCH_RUNTIME} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_RUNTIME:
			return action.payload
		default:
			return state
	}
}