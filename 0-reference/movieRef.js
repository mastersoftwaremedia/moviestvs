export function fetchMovieDetail(id){
  const url_movie = URL_DETAIL + id + API_KEY;
  return function(dispatch){
    dispatch(fetchMovie())
    return fetch(url_movie)
      .then(response => response.json())
      .then(data => dispatch(fetchMovieSuccess(data)))
      .catch(error => dispatch(fetchMovieFail(error)))
  }
}
export function fetchCastList(id){
  const url_casts = URL_DETAIL + id + URL_CAST + API_KEY;
  return function(dispatch){
    dispatch(fetchCasts())
    return fetch(url_casts)
      .then(response => response.json())
      .then(json => json.cast)
      .then(data => dispatch(fetchCastsSuccess(data)))
      .catch(error => dispatch(fetchCastsFail(error)))
  }
}
export function fetchTrailerList(id){
  const url_trailers = URL_DETAIL + id + URL_VIDEO + API_KEY;
  return function(dispatch){
    dispatch(fetchTrailers())
    return fetch(url_trailers)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => {
        let youtubeTrailers = data.filter(function(trailer){
          return trailer.site === 'YouTube';
        });
        dispatch(fetchTrailersSuccess(youtubeTrailers));
      }).catch(error => dispatch(fetchTrailersFail(error)))
  }
}
=============
const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
}

const movieList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_MOVIES:
    case SEARCH_MOVIE:
      return {...state, isFetching:true
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
      return {...state, isFetching:false, items:action.data}
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIE_FAILURE:
      return {...state, isFetching:false, error:action.data}
    default:
      return state
  }
}

const castList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_CASTS:
			return {...state, isFetching:true}
      //return Object.assign({}, state, {isFetching:true});
    case FETCH_CASTS_SUCCESS:
			return {...state, isFetching:false, items:action.data}
      //return Object.assign({}, state, {
        //isFetching:false,
        //items:action.data
      //});
    case FETCH_CASTS_FAILURE:
			return {...state, isFetching:false, error:action.data}
      //return Object.assign({}, state, {
        //isFetching:false,
        //error:action.data
      //});
    default:
      return state;
  }
};

const trailerList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_TRAILERS:
      return {...state, isFetching:true}
    case FETCH_TRAILERS_SUCCESS:
      return {...state, isFetching:false, items:action.data}
    case FETCH_TRAILERS_FAILURE:
      return {...state, isFetching:false, error:action.data}
    default:
      return state;
  }
}

const defaultState = {
  isFetching: false,
  item:{},
  error:{}
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_MOVIE:
      return {...state, isFetching:true}
    case FETCH_MOVIE_SUCCESS:
      return {...state, isFetching:false, item:action.data}
    case FETCH_MOVIE_FAILURE:
      return {...state, isFetching:false, error:action.data}
    default:
      return state
  }
}
============
import React, { Component } from 'react';
import { MovieList, DisplayMsg} from '../components';
import { connect } from 'react-redux';
import { fetchMovieList, searchMovieList } from '../actions';

class MovieContainer extends Component {

  componentDidMount() {
     if(!this.props.params.keyword){
      const {dispatch} = this.props;
      dispatch(fetchMovieList());
     }
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
       if(nextProps.params.keyword && this.props.params.keyword !== nextProps.params.keyword) {
           dispatch(searchMovieList(nextProps.params.keyword));
        }
  }


  shouldComponentUpdate(nextProps, nextState){
      if(this.props.movies !== nextProps.movies) {
        return true;
      }
      return false;
  }

  render() {

    const {movies} = this.props;
    if(movies.length > 0) {
      return(
            <MovieList movies={movies} />
      );
    } else {
      return (<DisplayMsg />);
    }
  }
}

function mapStateToProps(state, ownProps){
  const {movieList} = state;
  const {isFetcing_movieList, items: movies, error_movieList} = movieList;

  const keyword = ownProps.params.keyword;
  return {movies, keyword}
}
export default connect(mapStateToProps)(MovieContainer);
-------------
import React, { Component } from 'react';
import { MoviePoster, CastList, TrailerList} from '../components';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { MovieInfo, Poster } from '../components';
import { connect } from 'react-redux';
import { fetchMovieDetail, fetchCastList, fetchTrailerList} from '../actions';

class MovieDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchMovieDetail(this.props.params.id));
    dispatch(fetchCastList(this.props.params.id));
    dispatch(fetchTrailerList(this.props.params.id));
  }
  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
         dispatch(fetchMovieDetail(nextProps.params.id));
         dispatch(fetchCastList(nextProps.params.id));
         dispatch(fetchTrailerList(nextProps.params.id));
      }
  }

  render() {
    const {movie, casts, trailers, 
		isFetcing_movie, isFetcing_casts, isFetcing_trailers} = this.props;

    if(isFetcing_movie || isFetcing_casts || isFetcing_trailers) {
      return <p>loading...</p>
    }
    if(movie.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Poster id={movie.id} path={movie.poster_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <MovieInfo movie={movie}/>
              <CastList data={casts.slice(0,CAST_MAX_NUM)} />
            </Col>
          </Row>
          <Row>
            <TrailerList data={trailers.slice(0,TRAILER_MAX_NUM)} />
          </Row>
        </Grid>
      );
    } else
      return null;
  }
}

function mapStateToProps(state){
  const {movieDetail, castList, trailerList} = state;
  const {isFetcing_movie, item: movie, error_movie} = movieDetail;
  const {isFetcing_casts, items: casts, error_casts} = castList;
  const {isFetcing_trailers, items: trailers, error_trailers} = trailerList;

  return {isFetcing_movie, movie, error_movie, isFetcing_casts, casts, error_casts, isFetcing_trailers, trailers, error_trailers}
}
export default connect(mapStateToProps)(MovieDetail);
============
import React , { Component } from 'react';
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class MovieList extends Component{
  render() {
		const style={
			display: 'flex',
			flexWrap: 'wrap'
		}
    let movies = this.props.movies.filter(function(movie){
      return movie.poster_path != null;
    }).map(function(movie) {
			return(
				<Col xs={6} sm={4} md={3} key={movie.id} >
					<Link to={'/movie/'+movie.id} >
						<Poster info id={movie.id} 
						path={movie.poster_path} 
						title={movie.title} 
						voteAverage={movie.vote_average} 
						release_date={movie.release_date} 
						responsive />
					</Link>
        </Col>
      );
    });	
		return(
      <Grid fluid={false}>
        <Row style={style}>
          {movies}
        </Row>
      </Grid>
    );
  }
}
--------------
import React , { Component } from 'react';
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import { URL_IMG, IMG_SIZE_LARGE } from '../const'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'

export default function Poster(props){
  const StyledImg = styled.div`
    &:hover .image{
       opacity:1;
    }
    &:hover .title{
       opacity: ${props.info ? 1:0};
    }
  `;
  const Info =  styled.div`
      position: absolute;
      top: 75%;
      margin:10px;
      color:white;
      font-weight:bold;
      opacity:0;
  `;
  return(
    <StyledImg>
      <Image className="image" key={props.id} 
			src={URL_IMG+IMG_SIZE_LARGE+props.path} responsive />
      {props.info &&
				<Info className="title">
					<h4>{props.title}</h4>
					<Glyphicon glyph={'star'} /> 
					{props.voteAverage} &nbsp;&nbsp; {props.release_date.substring(0,4)}
				</Info>
      }
    </StyledImg>
  );
}
------------
import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'

export default function MovieInfo(props){
  const style = {paddingLeft: '15px'};
	return(
		<div style={style}>
			<Row>
				<Title title={props.movie.title} />
      </Row>
			<Row>
				<Col xs={4}>
					<SubTitleWithIcon icon={'star'} title={props.movie.vote_average} />
        </Col>
        <Col xs={4}>
          <SubTitleWithIcon icon={'heart'} title={props.movie.vote_count} />
        </Col>
        <Col xs={4}>
          <SubTitle title={props.movie.release_date.substring(0,4)} />
        </Col>
			</Row>
      <Row>
				<Description category={'Overview'} 
				description={props.movie.overview} />
      </Row>
    </div>
  );
}
--------------
import React from 'react'

export default function Title(props){
  const style = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };
  return(
    <h1 style={style}> {props.title} </h1>
  );
}
-------------
import React from 'react';

export default function Description(props){
  console.log('props' + props);
  return(
    <div>
      <h3>{props.category}</h3>
      <p>
        {props.description}
      </p>
    </div>
  );
}
--------------
import React from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}){
  const StyledLink = styled(Link)`
		&:hover {text-decoration:none;}`;
	const casts = data.map(function(cast){
		if(cast.profile_path != null) {
			return(
				<Col xs={4} sm={3} md={2} key={cast.id} >
					<StyledLink to={'/star/'+cast.id} >
						<Cast cast={cast} />
					</StyledLink>
        </Col>
      );
    }
  });
  return(
		<div>
			<h3>Casts</h3>
      {casts}
    </div>
  );
}
-------------------
import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

export default function Cast({cast}) {
  return (
    <Thumbnail src={URL_IMG+IMG_SIZE_SMALL+cast.profile_path} alt={cast.name} >
      <p>{cast.name}</p>
    </Thumbnail>
  );
}
Cast.propTypes = {
  cast: React.PropTypes.shape({
    profile_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};
------------
import React from 'react'
import Trailer from './Trailer'
import { Col } from 'react-bootstrap'

export default function TrailerList({data}){
	let trailers = data.map(function(trailer){
		return(
			<Col xs={12} sm={6} md={4} key={trailer.id} >
				<Trailer trailer={trailer.key} />
      </Col>
    );
	});
  const style = {marginTop: '15px'};
  const titleStyle = {paddingLeft: '20px'};
  
  if(trailers.length != 0){
		return(
			<div>
				<h3 style={titleStyle}>Trailers</h3>
				<div style={style}>{trailers}</div>
      </div>
    );
	}else	return null;
}
--------------
import React from 'react';
import { URL_YOUTUBE } from '../const';

/**
 * Represents a trailer 
 * @param {string} trailer - the address of trailer for YouTube api
 */
export default function Trailer({trailer}) {
  return <iframe src={URL_YOUTUBE + trailer} allowFullScreen />;
}

Trailer.propTypes = {
  trailer: React.PropTypes.string.isRequired,
};
---------------
