import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class ShowFavListItem extends Component{
	state={favorited:this.props.isFavorite}
	
	favoriteItem(){
		this.setState({favorited:true})
		this.props.favoriteItem(this.props.item)
	}
	unfavoriteItem(){
		this.setState({favorited:false})
		this.props.unfavoriteItem(this.props.item)
	}
	renderFavoriteHeart=()=>{
		if(!this.props.authenticated){
			return ''
		}
		if(this.state.favorited){
			return <i className="favorite fa fa-heart" 
				aria-hidden="true"
				onClick={()=>this.unfavoriteItem()}></i>
		}
		return <i className="favorite fa fa-heart-o" 
			aria-hidden="true"	
			onClick={()=>this.favoriteItem()}></i>
	}
	
	render(){
		//console.log('From MSListItem',this.props)
		console.log('from sshow poster_path',this.props.item.hasOwnProperty('poster_path')!=='null')
		console.log('from sshow poster_path this.props',this.props.item!=='null')
		const {id}=this.props.item
		console.log('id from mslistitem where link is',id)
		const URL='http://image.tmdb.org/t/p/w342//'		
		if(this.props.item.poster_path!==null && this.props.item.id){				
		return(
			<div className="gif-item">
			{this.renderFavoriteHeart()}
				<div className="post">
					<img className="img_cursor" src={`${URL}${this.props.item.poster_path}`} 
						alt={this.props.item.name} 
						title={this.props.item.name}			
						onClick={()=>this.props.openModal(this.props.item)} />
					<div className="text"><Link to={`/shows/v2/${id}`}>View More</Link></div>
					<h3 className="title">{this.props.item.name}</h3>
					<p className="post_info">{this.props.item.vote_average} | {this.props.item.first_air_date}</p>										
				</div>
			</div>
		)
	}else return null
	}
}
export default ShowFavListItem