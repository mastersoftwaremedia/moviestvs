import {FETCH_CREATOR} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_CREATOR:
	return action.payload
		default:
			return state
	}
}