import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class MoviesDisplay extends Component{
	render(){
		const {title,poster,id,vote,release}=this.props
		const URL='http://image.tmdb.org/t/p/w342//'
		return (
		<div className="post">
			<img src={`${URL}${poster}`} 
		alt={title} title={title} />
			<div className="text"><Link to={`/movies/${id}`}>View More</Link></div>
			<h3 className="title">{title}</h3>
			<p className="post_info">{vote} | {release}</p>
		</div>
		)
	}
}

MoviesDisplay.propTypes={
	title:PropTypes.string.isRequired,
	poster:PropTypes.string.isRequired,
	vote:PropTypes.number.isRequired,
	release:PropTypes.string.isRequired
}
export default MoviesDisplay		