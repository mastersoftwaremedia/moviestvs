import React from 'react'

const Banner=({banner})=>{
	return(
	<div id="banner" className="clearfix">
		<div id="banner_content_wrapper">
			<div id="poster">
				<img src="amazingspider.jpg" 
					alt={banner.title} 
					className="featured_image" />
				<a href={banner.homepage} target="_blank"><i className="fa fa-play-circle-o play_button" aria-hidden="true"></i></a>
			</div>
			<div id="content">
				<h2 className="title">{banner.title} (2012)</h2><br/>

				<div className="ratings">
					<i className="fa fa-star" aria-hidden="true"></i> {" "}<span className="voted">Ratings:</span> <h2 className="title">{banner.vote_average}</h2>
				</div>
				<p className="description">{banner.overview}</p>
				<p className="info">PG-13 <span>|</span> 2h 16min <span>|</span> Action, Adventure <span>|</span> 3 July 2012 (USA)</p>
			</div>
		</div>
	</div>
	)
}
export default Banner