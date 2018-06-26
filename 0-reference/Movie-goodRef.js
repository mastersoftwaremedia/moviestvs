import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchMovies,fetchMovie, fetchMovieCasts, fetchMovieRuntime, 
fetchMovieTagline, fetchMovieGenres, fetchMovieYoutubes,
fetchMovieRecommendations} from '../actions'
import MoviesDisplay from './MoviesDisplay'

class Movie extends Component{
	componentWillMount=()=>{
		const {id}=this.props.match.params
		this.props.fetchMovies()
		if(id){
			this.props.fetchMovie(id)
			this.props.fetchMovieCasts(id)
			this.props.fetchMovieRuntime(id)
			this.props.fetchMovieTagline(id)
			this.props.fetchMovieGenres(id)
			this.props.fetchMovieYoutubes(id)
			this.props.fetchMovieRecommendations(id)
		}
	}
	render(){
		console.log('props',this.props)
		const {movies,movie,casts,runtime,tagline,genres,youtubes,recommendations}=this.props
		const URL_IMG = 'https://image.tmdb.org/t/p/'
		const URL_YOUTUBE='https://www.youtube.com/embed/'
//https://www.youtube.com/watch?v=
//https://www.youtube.com/watch?v=SUXWAEX2jlg
		const IMG_SIZE_LARGE = 'w342/'
		const CAST_MAX_NUM=5
		const TRAILER_MAX_NUM=3
		const size=4
		const renderMovies=movies.slice(0,size).map(movie=>{
			//console.log(movie)
			return(
					<MoviesDisplay 
					title={movie.title}
					poster={movie.poster_path}
					key={movie.id}
					id={movie.id}
					vote={movie.vote_average}
					release={movie.release_date}
				/>
			)
		})		
		console.log('movie',movie)
		console.log('id from movie',this.props.match.params.id)
		console.log(movie.hasOwnProperty('id'))
		console.log('casts from movie',casts)
		console.log('runtime from movie',runtime)
		console.log('genres from movie',genres)
		if(movie.hasOwnProperty('id')){
			return(
			<div>
				<div className="movie">
					<div className="movie_column">
						<img src={`${URL_IMG}${IMG_SIZE_LARGE}${movie.poster_path}`} 
						alt={movie.title} title={movie.title} className="movie_poster" />
					</div>
					<div className="movie_column">
						<h1 className="movie_title">{movie.title}</h1>
						<div className="tagline">{tagline}</div>
						<h2 className="runtime">Runtime: {runtime} mins</h2>
						<div className="movie_ratings">
							Ratings: {movie.vote_average} | Released: {movie.release_date}
						</div>
						<div className="movie_synopsis">
						{movie.overview}
						</div>
						<div className="movie_genres">Genres:</div>
							{genres.map((genre,key)=><div key={genre.id} className="movie_genre">{genre.name} </div>)}
												
						<div className="cast_title">Casts:</div>
						{casts.slice(0,CAST_MAX_NUM).map((cast,key)=>{
							return <div className="cast" key={cast.cast_id}><span className="cast_name">{cast.name}</span> as {cast.character}</div>
						})}

						<div className="cast_title">Teasers:</div>
						{youtubes.slice(0,TRAILER_MAX_NUM).map((youtube,key)=>{
							return <div className="cast" key={youtube.id}>
							<iframe title="youtube_video" width="100" height="100" src={`${URL_YOUTUBE}${youtube.key}`} frameBorder="0" allowFullScreen></iframe>
							</div>
						})}
					
					</div>
				</div>
				
				<div className="recommendation">
					<h2>Recommendations</h2>
					<div className="clearfix" id={movies?"top_movies":"App--loading"}>
						<div className="wrapper1">
							<div className="row">
							{movies? renderMovies: 'Loading...'}
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
		movies:state.movies,
		movie:state.movies.find(movie=> movie.id==ownProps.match.params.id),
		casts:state.casts,
		tagline:state.tagline,
		runtime:state.runtime,
		genres:state.genres,
		youtubes:state.youtubes,
		recommendations:state.recommendations
	}
}
export default connect(mapStateToProps,{fetchMovies,
fetchMovie, fetchMovieCasts, fetchMovieRuntime,
fetchMovieTagline, fetchMovieGenres,
fetchMovieYoutubes, fetchMovieRecommendations})(Movie)