import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMovie, fetchMovieCasts, fetchMovieRuntime, 
fetchMovieTagline, fetchMovieGenres, fetchMovieYoutubes,
} from '../actions'

class MovieItems extends Component{
	componentWillMount=()=>{
		const {id}=this.props.match.params
		if(id){
			this.props.fetchMovie(id)
			this.props.fetchMovieCasts(id)
			this.props.fetchMovieRuntime(id)
			this.props.fetchMovieTagline(id)
			this.props.fetchMovieGenres(id)
			this.props.fetchMovieYoutubes(id)			
		}
	}
	render(){
		console.log('props from v2',this.props)
		console.log('match.params',this.props.match.params)
		const {item,casts,runtime,tagline,genres,youtubes}=this.props
		const URL_IMG = 'https://image.tmdb.org/t/p/'
		const URL_YOUTUBE='https://www.youtube.com/embed/'
		const IMG_SIZE_LARGE = 'w342/'
		const CAST_MAX_NUM=5
		const TRAILER_MAX_NUM=4		
		console.log('movie item',item)
		console.log('id from movie item',this.props.match.params.id)
		console.log('hasOwnProperty',item.hasOwnProperty('id'))
		console.log('casts from item',casts)
		console.log('runtime from item',runtime)
		console.log('genres from item',genres)
		if(this.props.item.poster_path!==null && this.props.item.id){
			return(
			<div>
				<div className="movie">
					<div className="movie_column">
						<img src={`${URL_IMG}${IMG_SIZE_LARGE}${item.poster_path}`} 
						alt={item.title} title={item.title} className="movie_poster" />
					</div>
					<div className="movie_column">
						<h1 className="movie_title">{item.title}</h1>
						<div className="tagline">{tagline}</div>
						<h2 className="runtime">Runtime: {runtime} mins</h2>
						<div className="movie_ratings">
							Ratings: {item.vote_average} | Released: {item.release_date}
						</div>
						<div className="movie_synopsis">
						{item.overview}
						</div>
						<div className="movie_genres">Genres:</div>
							{genres.map((genre,key)=><div key={genre.id} className="movie_genre">{genre.name} </div>)}
												
						<div className="cast_title">Casts:</div>
						{casts.slice(0,CAST_MAX_NUM).map((cast,key)=>{
							return <div className="cast" key={cast.cast_id}><span className="cast_name">{cast.name}</span> as {cast.character}</div>
						})}
					
					</div>
				</div>
				
				<div className="teasers">
					<h2>Teasers</h2><br/>
					<div className="clearfix" id={youtubes?"top_movies":"No trailers to show."}>
						<div className="wrapper1">
							<div className="row">
						{youtubes.slice(0,TRAILER_MAX_NUM).map((youtube,key)=>{
							return <div className="youtube" key={youtube.id}>
							<iframe className="youtube" title="youtube_video"  src={`${URL_YOUTUBE}${youtube.key}`} frameBorder="0" allowFullScreen></iframe>
							</div>
						})}
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}else return null
	}
}

const mapStateToProps=(state,ownProps)=>{
	console.log('ownprops',ownProps)
	return{
		item:state.items.smovies.find(item=> item.id==ownProps.match.params.id),
		casts:state.casts,
		tagline:state.tagline,
		runtime:state.runtime,
		genres:state.genres,
		youtubes:state.youtubes
	}
}
export default connect(mapStateToProps,{
fetchMovie, fetchMovieCasts, fetchMovieRuntime,
fetchMovieTagline, fetchMovieGenres,
fetchMovieYoutubes})(MovieItems)