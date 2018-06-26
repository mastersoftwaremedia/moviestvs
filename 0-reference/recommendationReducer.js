import {FETCH_RECOMMENDATIONS} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_RECOMMENDATIONS:
	return action.payload
		default:
			return state
	}
}