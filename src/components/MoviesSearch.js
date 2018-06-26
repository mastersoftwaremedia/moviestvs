import React,{Component} from 'react'
import {connect} from 'react-redux'
import {searchMovies,openModal,favoriteItem,
unfavoriteItem,closeModal} from '../actions'
import MovieSearchBar from './MovieSearchBar'
import MovieFavList from './MovieFavList'
import MovieFavModal from './MovieFavModal'

class MoviesSearch extends Component{
	render(){
		return(
			<div>
				<MovieSearchBar searchMovies={this.props.searchMovies}/>
				<MovieFavList items={this.props.items} 
					authenticated={this.props.authenticated}
					openModal={selectedItem=>this.props.openModal({selectedItem})}
					favoriteItem={selectedItem=>this.props.favoriteItem({selectedItem})}
					unfavoriteItem={selectedItem=>this.props.unfavoriteItem({selectedItem})}
				/>
				<MovieFavModal modalOpened={this.props.modalOpened}
					selectedItem={this.props.selectedItem}
					closeModal={()=>this.props.closeModal()}
				/>	
			</div>
		)
	}
}
const mapStateToProps=state=>{
	return{
		authenticated:state.auth.authenticated,
		items:state.items.smovies,
		modalOpened:state.modal.modalOpened,
		selectedItem:state.modal.selectedItem
	}
}
export default connect(mapStateToProps,{
	searchMovies,openModal,favoriteItem,unfavoriteItem,closeModal})(MoviesSearch)