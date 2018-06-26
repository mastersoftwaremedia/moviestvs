import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchShow, fetchShowCreator, 
fetchShowRuntime, fetchShowStatus,
fetchShowGenres, fetchShowYoutubes} from '../actions'

class Show extends Component{
	componentWillMount=()=>{
		const {id}=this.props.match.params
		if(id){
			this.props.fetchShow(id)
			this.props.fetchShowCreator(id)
			this.props.fetchShowRuntime(id)
			this.props.fetchShowStatus(id)
			this.props.fetchShowGenres(id)
			this.props.fetchShowYoutubes(id)
		}
	}
	render(){
		console.log('props',this.props)
		const {show,creator,runtime,status,genres}=this.props
		const URL_IMG = 'https://image.tmdb.org/t/p/'
		const IMG_SIZE_LARGE = 'w342/'	
		console.log('show',show)
		console.log('id from show',this.props.match.params.id)
		console.log('hasOwnProperty',show.hasOwnProperty('id'))
		console.log('creator from show',creator)
		console.log('runtime from movie',runtime)
		console.log('genres from movie',genres)
		if(show.hasOwnProperty('id')){
			return(
			<div>
				<div className="movie">
					<div className="movie_column">
						<img src={`${URL_IMG}${IMG_SIZE_LARGE}${show.poster_path}`} 
						alt={show.name} title={show.name} className="movie_poster" />
					</div>
					<div className="movie_column">
						<h1 className="movie_title">{show.name}</h1>
						<div className="movie_creator">
							Create By: {creator.map((c,key)=><span key={c.id} className="movie_genre">{c.name} </span>)}
						</div>
						<div className="movie_creator">
							Status: <span className="movie_genre">{status}</span>
						</div>
						<div className="movie_ratings">
							Ratings: <span className="movie_genre">{show.vote_average}</span> | First Released: <span className="movie_genre">{show.first_air_date}</span>
						</div>
						<div className="show_genres">Genres:</div>
							{genres.map((genre,key)=><div key={genre.id} className="show_genre">{genre.name} </div>)}

						<div className="movie_synopsis">
						{show.overview}
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
		show:state.shows.find(show=> show.id==ownProps.match.params.id),
		runtime:state.runtime,
		genres:state.genres,
		youtubes:state.youtubes,
		creator:state.creator,
		status:state.status
	}
}
export default connect(mapStateToProps,{
fetchShow, fetchShowCreator, 
fetchShowRuntime, fetchShowGenres,
fetchShowYoutubes, fetchShowStatus})(Show)