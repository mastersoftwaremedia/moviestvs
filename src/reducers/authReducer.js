import {AUTH_USER,AUTH_OUT_USER,AUTH_ERROR} from '../actions'

const initialState={
	authenticated:false,
	error:null
}

export default function(state=initialState,action){
	switch(action.type){
		case AUTH_USER:
			return{...state,authenticated:true}
		case AUTH_OUT_USER:
			return{...state,authenticated:false}
		case AUTH_ERROR:
			return{...state,error:action.payload.message}
		default:
			return state
	}
}