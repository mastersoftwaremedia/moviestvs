import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchFavoritedItems,openModal,favoriteItem,unfavoriteItem,closeModal} from '../actions'
import MovieFavList from './MovieFavList'
import MovieFavModal from './MovieFavModal'

class Favorites extends Component{
	componentWillMount(){
		this.props.fetchFavoritedItems()
	}
	render(){
		return(
			<div>
				<MovieFavList items={this.props.items} 
					authenticated={this.props.authenticated}
					isFavorite={true}
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
		items:state.items.favorites,
		modalOpened:state.modal.modalOpened,
		selectedItem:state.modal.selectedItem
	}
}
export default connect(mapStateToProps,{
	fetchFavoritedItems,openModal,favoriteItem,unfavoriteItem,closeModal})(Favorites)