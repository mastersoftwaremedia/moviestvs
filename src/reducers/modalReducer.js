import {OPEN_MODAL,CLOSE_MODAL} from '../actions'

const initialState={
	selectedItem:null,
	modalOpened:false
}

export default function(state=initialState,action){
	switch(action.type){
		case OPEN_MODAL:
			return{...state,modalOpened:true,selectedItem:action.payload.selectedItem}
		case CLOSE_MODAL:
			return{...state,modalOpened:false,selectedItem:null}
		default:
			return state
	}
}