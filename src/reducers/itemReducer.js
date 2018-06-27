import {SEARCH_MOVIES, SEARCH_SHOWS, FETCH_BANNER, FETCH_FAVORITED_ITEMS} from '../actions'
const initialState={
	smovies:[],
	sshows:[],
	favorites:[],
	banner:{}
}

export default function(state=initialState,action){
	switch(action.type){
		case SEARCH_MOVIES:
			return {...state, smovies:action.payload || null}
		case SEARCH_SHOWS:
			return {...state, sshows:action.payload || null}		
		case FETCH_BANNER:
			return{...state, banner:action.payload}
		case FETCH_FAVORITED_ITEMS:
			let fav_arr=[]
			for(let i in action.payload){
				if(action.payload.hasOwnProperty(i)){
					fav_arr.push(action.payload[i])
				}
			}
			return{...state,favorites:fav_arr}
		default:
			return state
	}
}