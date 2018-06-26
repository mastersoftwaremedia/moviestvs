import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class MovieFavListItem extends Component{
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
		//console.log('from smovie poster_path',this.props.item.hasOwnProperty('poster_path')==='null')
		console.log('from smovie poster_path this.props',this.props.item!=='null')
		const {id}=this.props.item
		console.log('id from mslistitem where link is',id)
		const URL='http://image.tmdb.org/t/p/w342//'
		//if(this.props.item.poster_path==='null'){
	//return null
		//}
		if(this.props.item.poster_path!==null && this.props.item.id){			
		return(
			<div className="gif-item">
			{this.renderFavoriteHeart()}
				<div className="post">
					<img className="img_cursor" src={`${URL}${this.props.item.poster_path}`} 
						alt={this.props.item.title} 
						title={this.props.item.title}			
				onClick={()=>this.props.openModal(this.props.item)} />
					<div className="text"><Link to={`/movies/v2/${id}`}>View More</Link></div>
					<h3 className="title">{this.props.item.title}</h3>
					<p className="post_info">{this.props.item.vote_average} | {this.props.item.release_date}</p>										
				</div>
			</div>
		)
	}else return null
	}
}
export default MovieFavListItem