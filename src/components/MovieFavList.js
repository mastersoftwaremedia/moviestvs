import React from 'react'
import MovieFavListItem from './MovieFavListItem'

const MovieFavList=(props)=>{
	//console.log('From MSList',props)
	const msListItems=props.items.map(item=>{
			console.log('From MSList ITEM',item)
		return(
			<MovieFavListItem key={item.id} item={item}
				openModal={props.openModal}
				favoriteItem={props.favoriteItem}
				unfavoriteItem={props.unfavoriteItem}
				authenticated={props.authenticated}
				isFavorite={props.isFavorite}					
			/>	
		)
	})

	return(
		<div className="gif-list">
			<div className="wrapper">
				<div className="row">			
				{msListItems}
				</div>
			</div>
		</div>
	)
}
export default MovieFavList