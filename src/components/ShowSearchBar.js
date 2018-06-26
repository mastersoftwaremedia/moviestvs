import React,{Component} from 'react'

class ShowSearchBar extends Component{
	handleSearchShows(term){
		this.props.searchShows(term)
	}
	render(){
		return(
			<div className="search">
				<input 
					type="text" 
					placeholder="Search for TV Shows!"
					onChange={evt=>this.handleSearchShows(evt.target.value)} />
			</div>
		)
	}
}
export default ShowSearchBar