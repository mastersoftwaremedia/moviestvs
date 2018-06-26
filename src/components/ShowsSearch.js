import React,{Component} from 'react'
import {connect} from 'react-redux'
import {searchShows,openModal,favoriteItem,unfavoriteItem,closeModal} from '../actions'
import ShowSearchBar from './ShowSearchBar'
import ShowFavList from './ShowFavList'
import ShowFavModal from './ShowFavModal'

class ShowsSearch extends Component{
	render(){
		return(
			<div>
				<ShowSearchBar searchShows={this.props.searchShows}/>
				<ShowFavList items={this.props.items} 
					authenticated={this.props.authenticated}
					openModal={selectedItem=>this.props.openModal({selectedItem})}
					favoriteItem={selectedItem=>this.props.favoriteItem({selectedItem})}
					unfavoriteItem={selectedItem=>this.props.unfavoriteItem({selectedItem})}
				/>
				<ShowFavModal modalOpened={this.props.modalOpened}
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
		items:state.items.sshows,
		modalOpened:state.modal.modalOpened,
		selectedItem:state.modal.selectedItem
	}
}
export default connect(mapStateToProps,{
	searchShows,openModal,favoriteItem,unfavoriteItem,closeModal})(ShowsSearch)