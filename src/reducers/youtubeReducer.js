import {FETCH_YOUTUBES} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_YOUTUBES:
			return action.payload
		default:
			return state
	}
}