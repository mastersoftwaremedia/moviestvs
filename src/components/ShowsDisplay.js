import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const ShowsDisplay=({title,poster,id,vote,release})=>{
	return (
		<div className="post">
			<ShowPoster poster={poster} alt={title} />
			<div className="text"><Link to={`/shows/${id}`}>View More</Link></div>
			<h3 className="title">{title}</h3>
			<p className="post_info">{vote} | {release}</p>
		</div>
	)
}

const ShowPoster=({poster,alt})=>{
	const URL='http://image.tmdb.org/t/p/w342//'
	return(
		<img src={`${URL}${poster}`} 
		alt={alt} title={alt} className="image_style" />
	)
}

ShowsDisplay.propTypes={
	title:PropTypes.string.isRequired,
	poster:PropTypes.string.isRequired,
	vote:PropTypes.number.isRequired,
	release:PropTypes.string.isRequired
}
ShowPoster.propTypes={
	poster:PropTypes.string.isRequired,
	alt:PropTypes.string.isRequired
}

export default ShowsDisplay;		