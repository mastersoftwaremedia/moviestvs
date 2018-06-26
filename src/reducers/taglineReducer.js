import {FETCH_TAGLINE} from '../actions'

export default function(state=[],action){
	switch(action.type){
		case FETCH_TAGLINE:
			return action.payload
		default:
			return state
	}
}