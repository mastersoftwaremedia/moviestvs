import axios from 'axios'
import {history} from '../configureStore'
import firebase from '../firebase'


export const OPEN_MODAL='OPEN_MODAL'
export const CLOSE_MODAL='CLOSE_MODAL'

export const SEARCH_MOVIES='SEARCH_MOVIES'
export const SEARCH_SHOWS='SEARCH_SHOWS'

export const FETCH_MOVIES='FETCH_MOVIES'
export const FETCH_SHOWS='FETCH_SHOWS'
export const FETCH_CASTS='FETCH_CASTS'
export const FETCH_GENRES='FETCH_GENRES'
export const FETCH_YOUTUBES='FETCH_YOUTUBES'

export const FETCH_MOVIE='FETCH_MOVIE'
export const FETCH_SHOW='FETCH_SHOW'
export const FETCH_RUNTIME='FETCH_RUNTIME'
export const FETCH_TAGLINE='FETCH_TAGLINE'
export const FETCH_CREATOR='FETCH_CREATOR'
export const FETCH_STATUS='FETCH_STATUS'
export const FETCH_BANNER='FETCH_BANNER'

export const FETCH_FAVORITED_ITEMS='FETCH_FAVORITED_ITEMS'

export const ADD_USERS='ADD_USERS'
export const AUTH_USER='AUTH_USER'
export const AUTH_ERROR='AUTH_ERROR'
export const AUTH_OUT_USER='AUTH_OUT_USER'

const KEY='f115729a953f89e114dcb61e99c5ff8c'
const SEARCH_MOVIES_API_URL='https://api.themoviedb.org/3/search/movie'
const SEARCH_SHOWS_API_URL='https://api.themoviedb.org/3/search/tv'

const POPULAR_MOVIES_API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`
const POPULAR_SHOWS_API_URL=`https://api.themoviedb.org/3/tv/popular?api_key=${KEY}&language=en-US&page=1`
const FETCH_BANNER_API_URL=`https://api.themoviedb.org/3/movie/1930?api_key=${KEY}&language=en-US`

const MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie/'
const SHOW_DETAIL = 'https://api.themoviedb.org/3/tv/'

//const URL_YOUTUBE='https://www.youtube.com/watch?v='
const URL_CAST='/casts'
const URL_VIDEO='/videos'
const URL_RECOMMENDATION='/recommendations'

//const URL_IMG = 'https://image.tmdb.org/t/p/'
//const IMG_SIZE_LARGE = 'w342/'
//const CAST_MAX_NUM=5
//const TRAILER_MAX_NUM = 3
//https://www.youtube.com/watch?v=SUXWAEX2jlg
//https://api.themoviedb.org/3/movie/260513?api_key=f115729a953f89e114dcb61e99c5ff8c&language=en-US
//const cast_url=https://api.themoviedb.org/3/movie/260513/casts?api_key=f115729a953f89e114dcb61e99c5ff8c&language=en-US&page=1

/*SEARCH*/
export const searchMovies=(term=null)=>dispatch=>{
	axios.get(`${SEARCH_MOVIES_API_URL}?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${term.replace(/\s/g,'+')}`)
	.then(res=>dispatch({type:'SEARCH_MOVIES', payload:res.data.results}))
}
export const searchShows=(term=null)=>dispatch=>{
	axios.get(`${SEARCH_SHOWS_API_URL}?api_key=${KEY}&language=en-US&page=1&query=${term.replace(/\s/g,'+')}`)
	.then(res=>dispatch({type:'SEARCH_SHOWS', payload:res.data.results}))
}
/*FETCH MOVIES->MOVIE*/
export const fetchMovies=()=>dispatch=>{
	return axios.get(POPULAR_MOVIES_API_URL)
	.then(res=>{
		dispatch({type:'FETCH_MOVIES', payload:res.data.results})
		console.log(res.data.results)
	})
	.catch(err=>{dispatch({type:'FETCH_MOVIES',payload:null})})
}
const movieFetched=(movie)=>{
	return{
		type:FETCH_MOVIE,
		movie
	}
}
export const fetchMovie=(id)=>{
	return dispatch=>{
		fetch(`${MOVIE_DETAIL}${id}?api_key=${KEY}&language=en-US`)
		.then(res=>res.json())
		.then(movie=>{
			dispatch(movieFetched(movie.movie))})
	}
}
/*FETCH SHOW->SHOW*/
export const fetchShows=()=>dispatch=>{
	return axios.get(POPULAR_SHOWS_API_URL)
	.then(res=>{
		dispatch({type:'FETCH_SHOWS', payload:res.data.results})
		console.log(res.data.results)
	})
	.catch(err=>{dispatch({type:'FETCH_SHOWS',payload:null})})
}
const showFetched=(show)=>{
	return{
		type:FETCH_SHOW,
		show
	}
}
export const fetchShow=(id)=>{
	return dispatch=>{
		fetch(`${SHOW_DETAIL}${id}?api_key=${KEY}&language=en-US`)
		.then(res=>res.json())
		.then(tv=>dispatch(showFetched(tv.show)))
	}
}
/*FETCH BANNER*/
export const fetchBanner=()=>dispatch=>{
	return axios.get(FETCH_BANNER_API_URL)
	.then(res=>{
		dispatch({type:'FETCH_BANNER', payload:res.data})
		console.log(res.data)
	})
	.catch(err=>{dispatch({type:'FETCH_BANNER',payload:null})})
}

/*CASTS*/
export const fetchMovieCasts=(id)=>dispatch=>{
	return axios.get(`${MOVIE_DETAIL}${id}${URL_CAST}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_CASTS', payload:res.data.cast})
		console.log('castfrom actions',res.data.cast)
	})
	.catch(err=>{dispatch({type:'FETCH_CASTS',payload:null})})
}
export const fetchShowCasts=(id)=>dispatch=>{
	return axios.get(`${SHOW_DETAIL}${id}${URL_CAST}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_CASTS', payload:res.data.cast})
		console.log('castfrom actions',res.data.cast)
	})
	.catch(err=>{dispatch({type:'FETCH_CASTS',payload:null})})
}

/*GENRES*/
export const fetchMovieGenres=(id)=>dispatch=>{
  return axios.get(`${MOVIE_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_GENRES',payload:res.data.genres})
		console.log('genres',res.data.genres)
	})
	.catch(err=> dispatch({type:'FETCH_GENRES', payload:null}))
}
export const fetchShowGenres=(id)=>dispatch=>{
  return axios.get(`${SHOW_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_GENRES',payload:res.data.genres})
		console.log('genres',res.data.genres)
  })
	.catch(err=> dispatch({type:'FETCH_GENRES', payload:null}))
}

/*RUNTIME*/
export const fetchMovieRuntime=(id)=>dispatch=>{
	return axios.get(`${MOVIE_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_RUNTIME', payload:res.data.runtime})
		console.log(res.data.runtime)
	})
	.catch(err=>{dispatch({type:'FETCH_RUNTIME',payload:null})})
}
export const fetchShowRuntime=(id)=>dispatch=>{
	return axios.get(`${SHOW_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_RUNTIME', payload:res.data.episode_run_time})
		console.log(res.data.episode_run_time)
	})
	.catch(err=>{dispatch({type:'FETCH_RUNTIME',payload:null})})
}

/*CREATOR*/
export const fetchShowCreator=(id)=>dispatch=>{
	return axios.get(`${SHOW_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_CREATOR', payload:res.data.created_by})
		console.log(res.data.created_by)
	})
	.catch(err=>{dispatch({type:'FETCH_CREATOR',payload:null})})
}
/*STATUS*/
export const fetchShowStatus=(id)=>dispatch=>{
	return axios.get(`${SHOW_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_STATUS', payload:res.data.status})
		console.log(res.data.status)
	})
	.catch(err=>{dispatch({type:'FETCH_STATUS',payload:null})})
}

/*TAGLINE*/
export const fetchMovieTagline=(id)=>dispatch=>{
	return axios.get(`${MOVIE_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_TAGLINE', payload:res.data.tagline})
		console.log(res.data.tagline)
	})
	.catch(err=>{dispatch({type:'FETCH_TAGLINE',payload:null})})
}
export const fetchShowTagline=(id)=>dispatch=>{
	return axios.get(`${SHOW_DETAIL}${id}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_TAGLINE', payload:res.data.tagline})
		console.log(res.data.tagline)
	})
	.catch(err=>{dispatch({type:'FETCH_TAGLINE',payload:null})})
}

/*YOUTUBES*/
export const fetchMovieYoutubes=(id)=>dispatch=>{
  return axios.get(`${MOVIE_DETAIL}${id}${URL_VIDEO}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_YOUTUBES',payload:res.data.results})
		console.log('youtubes',res.data.results)
  })
	.catch(err=> dispatch({type:'FETCH_YOUTUBES', payload:null}))
}
export const fetchShowYoutubes=(id)=>dispatch=>{
  return axios.get(`${SHOW_DETAIL}${id}${URL_VIDEO}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_YOUTUBES',payload:res.data.results})
		console.log('youtubes',res.data.results)
  })
	.catch(err=> dispatch({type:'FETCH_YOUTUBES', payload:null}))
}

/*RECOMMENDATIONS*/
export const fetchMovieRecommendations=(id)=>dispatch=>{
  return axios.get(`${MOVIE_DETAIL}${id}${URL_RECOMMENDATION}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_RECOMMENDATIONS',payload:res.data.results})
		console.log('recomm',res.data.results)
  })
	.catch(err=> dispatch({type:'FETCH_RECOMMENDATIONS', payload:null}))
}
export const fetchShowRecommendations=(id)=>dispatch=>{
  return axios.get(`${SHOW_DETAIL}${id}${URL_RECOMMENDATION}?api_key=${KEY}`)
	.then(res=>{
		dispatch({type:'FETCH_RECOMMENDATIONS',payload:res.data.results})
		console.log('recomm',res.data.results)
  })
	.catch(err=> dispatch({type:'FETCH_RECOMMENDATIONS', payload:null}))
}

/*Add Users*/
export const ADD_USER='ADD_USER'
export const addUser=user=>({type:'ADD_USER',user})
export const addUserToFirebase=(user)=>{
	const userUid=firebase.auth().currentUser.uid
	firebase.database().ref(userUid).child('users').push().set(user)
}
export const watchUserAddedEvt=()=>dispatch=>{
	const userUid=firebase.auth().currentUser.uid
	firebase.database().ref(userUid).child('users').on('child_added',snap=>{
		dispatch(addUser(snap.val()))
	})
}

/*Favorites*/
export const fetchFavoritedItems=()=>dispatch=>{
	const userId=firebase.auth().currentUser.uid
	firebase.database().ref(userId).child('favorites').on('value',snapshot=>{
		dispatch({type:'FETCH_FAVORITED_ITEMS', payload:snapshot.val()})
	})
}
export const favoriteItem=({selectedItem})=>{
	const userId=firebase.auth().currentUser.uid
	const selectedItemId=selectedItem.id	
	return dispatch=>firebase.database().ref(userId).child('favorites').update({[selectedItemId]:selectedItem})
}
export const unfavoriteItem=({selectedItem})=>{
	const userId=firebase.auth().currentUser.uid
	const selectedItemId=selectedItem.id
	return dispatch=>firebase.database().ref(userId).child('favorites').child(selectedItemId).remove()
}

export const openModal=item=>{
	return{type:'OPEN_MODAL', payload:item}
}
export const closeModal=()=>{
	return{type:'CLOSE_MODAL'}
}
export const authUser=()=>{
	return{type:'AUTH_USER'}
}
export const authError=error=>{
	return{type:'AUTH_ERROR', payload:error}
}
export const getError=error=>{
	return{type:'GET_ERROR', payload:error}
}

export const signUpUser=credentials=>dispatch=>{
	firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password)
	.then(res=>{
		dispatch(authUser())
		history.push('/')
	})
	.catch(error=>dispatch(authError(error)))
}
export const signInUser=credentials=>dispatch=>{
	firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
	.then(res=>{
		dispatch(authUser())
		history.push('/')
	})
	.catch(error=>dispatch(authError(error)))
}
export const signOutUser=()=>{
	firebase.auth().signOut()
	history.push('/')
	return{type:'AUTH_OUT_USER'}
}
export const verifyAuth=()=>dispatch=>{
	firebase.auth().onAuthStateChanged(user=>{
		if(user) dispatch(authUser())
		else dispatch(signOutUser())
	})
}