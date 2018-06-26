import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchMovies,fetchShows,fetchBanner} from '../actions'
import Banner from './Banner'
import MoviesDisplay from './MoviesDisplay'
import ShowsDisplay from './ShowsDisplay'

class Home extends Component{
	componentWillMount(){
		this.props.fetchMovies()
		this.props.fetchShows()
		this.props.fetchBanner()
	}

	render(){
		//console.log(this.props.movies)
		const size=6
		const renderMovies=this.props.movies.slice(0,size).map(movie=>{
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
		const renderShows=this.props.shows.slice(0,size).map(show=>{
			console.log(show)
			return(
					<ShowsDisplay 
					title={show.name}
					poster={show.poster_path}
					key={show.id}
					id={show.id}
					vote={show.vote_average}
					release={show.first_air_date}
				/>
			)
		})

		return(
			<div>
				<Banner banner={this.props.banner} />
				<div className="clearfix" id={this.props.movies?"top_movies":"App--loading"}>
					<div className="wrapper">
						<header className="clearfix">
							<h2>Popular Movies</h2>
							<p className="view_more"><Link className="view_more_link" to="/movies">Search Movies</Link></p>
						</header>

						<div className="row">
						{this.props.movies? renderMovies: 'Loading...'}
						</div>
					</div>
				</div>
				
				<div className="clearfix" id={this.props.shows?"top_shows":"App--loading"}>
					<div className="wrapper">
						<header className="clearfix">
							<h2>Popular TV Shows</h2>
							<p className="view_more"><Link className="view_more_link" to="/shows">Search TV Shows</Link></p>
						</header>

						<div className="row">
						{this.props.shows? renderShows: 'Loading...'}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps=state=>{
	return{
		movies:state.movies,
		banner:state.items.banner,
		shows:state.shows
	}
}
export default connect(mapStateToProps,{
	fetchMovies,fetchShows,fetchBanner})(Home)