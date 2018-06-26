import React,{Component} from 'react'

class MovieSearchBar extends Component{
	handleSearchMovies(term){
		this.props.searchMovies(term)
		console.log(term)
	}
	render(){
		if(this.props.searchMovies){
		return(
			<div className="search">
				<input 
					type="text" 
					placeholder="Search for Movies!"
					onChange={evt=>this.handleSearchMovies(evt.target.value)} />
			</div>
		)
		}else{
		return(
			<div className="search">
				<input 
					type="text" 
					placeholder="Search for Movies!"
					onChange={evt=>this.handleSearchMovies(evt.target.value)} />
			</div>
		)			
		}
	}
}
export default MovieSearchBar