import {FETCH_STATUS} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_STATUS:
			return action.payload
		default:
			return state
	}
}