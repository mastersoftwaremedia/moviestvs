css index const app 
actions>index reducers>index 
images> 

containers>index, SearchBar,
MovieContainer,
MovieDetail, StarDetail 

components>index, 
TrailerList, Trailer
Title, SubTitle, SubTitleWithIcon,
CastList, Cast, StarInfo,
MovieList, MovieInfo,
Poster, Description, DisplayMsg, ChartData
=================
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
//import createLogger from 'redux-logger';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import movieApp from './reducers';
import './index.css';
import { MovieContainer, MovieDetail, StarDetail } from './containers';
import { DisplayMsg } from './components';

//const loggerMiddleware = createLogger();
const routeMiddleware = routerMiddleware(hashHistory);
let store = createStore(movieApp, composeWithDevTools(
  applyMiddleware(thunkMiddleware, routeMiddleware)));
const history = syncHistoryWithStore(hashHistory,store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={MovieContainer} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/star/:id" component={StarDetail} />
        <Route path="/search/:keyword" component={MovieContainer} />
        <Route path="*" component={DisplayMsg} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
---------------
export const URL_LIST = 'https://api.themoviedb.org/3/discover/movie';
export const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';
export const URL_DETAIL = 'https://api.themoviedb.org/3/movie/';
export const URL_PERSON = 'https://api.themoviedb.org/3/person/';
export const URL_IMG = 'https://image.tmdb.org/t/p/';
export const URL_YOUTUBE = 'https://www.youtube.com/embed/';
export const URL_CAST = '/casts';
export const URL_VIDEO = '/videos';
export const IMG_SIZE_XSMALL = 'w45/';
export const IMG_SIZE_SMALL = 'w150/';
export const IMG_SIZE_LARGE = 'w342/';
export const CAST_MAX_NUM = 5;
export const TRAILER_MAX_NUM = 3;
export const API_KEY = '?api_key=4d4ed145d3584846f5922b6a467e1f85';
export const API_KEY_ALT = '&api_key=4d4ed145d3584846f5922b6a467e1f85';
----------------
import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <SearchBar brand="MovieBox" searchText={''} />
        {this.props.children}
      </div>
    );
  }
}
-------------------
import {
URL_LIST, URL_SEARCH, URL_DETAIL, 
URL_PERSON, URL_CAST, URL_VIDEO, 
API_KEY, API_KEY_ALT} from '../const';
// action types
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const RESET_MOVIES = 'RESET_MOVIES';

export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const FETCH_STAR_SUCCESS = 'FETCH_STAR_SUCCESS';
export const FETCH_STAR_FAILURE = 'FETCH_STAR_FAILURE';

export const FETCH_CASTS = 'FETCH_CASTS';
export const FETCH_CASTS_SUCCESS = 'FETCH_CASTS_SUCCESS';
export const FETCH_CASTS_FAILURE = 'FETCH_CASTS_FAILURE';

export const FETCH_TRAILERS = 'FETCH_TRAILERS';
export const FETCH_TRAILERS_SUCCESS = 'FETCH_TRAILERS_SUCCESS';
export const FETCH_TRAILERS_FAILURE = 'FETCH_TRAILERS_FAILURE';

function searchMovie(searchText) { 
  return {
    type: SEARCH_MOVIE,
    searchText
  };
}
function searchMovieSuccess(data, keyword) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    keyword
  };
}
function searchMovieFail(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error
  };
}
function fetchMovies() { //fetchMoviesLoading(){}
  return {type: FETCH_MOVIES};
}

function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}
function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}
function fetchMovie() {
  return {type: FETCH_MOVIE};
}
function fetchMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    data
  };
}
function fetchMovieFail(error) {
  return {
    type: FETCH_MOVIE_FAILURE,
    error
  };
}
function fetchStarSuccess(data) {
  return {
    type: FETCH_STAR_SUCCESS,
    data
  };
}
function fetchStarFail(error) {
  return {
    type: FETCH_STAR_FAILURE,
    error
  };
}
function fetchCasts() {
  return {type: FETCH_CASTS};
}
function fetchCastsSuccess(data) {
  return {
    type: FETCH_CASTS_SUCCESS,
    data
  };
}
function fetchCastsFail(error) {
  return {
    type: FETCH_CASTS_FAILURE,
    error
  };
}
function fetchTrailers() {
  return {type: FETCH_TRAILERS};
}
function fetchTrailersSuccess(data) {
  return {
    type: FETCH_TRAILERS_SUCCESS,
    data
  };
}
function fetchTrailersFail(error) {
  return {
    type: FETCH_TRAILERS_FAILURE,
    error
  };
}
export function searchMovieList(keyword){
  let url = URL_SEARCH + keyword + API_KEY_ALT;
  return function(dispatch){
    dispatch(searchMovie())
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(searchMovieSuccess(data,keyword)))
      .catch(error => dispatch(searchMovieFail(error)))
  }
}
export function fetchMovieList(option){
  let url;
  if(option) url = URL_LIST + API_KEY + '&with_cast=' + option;
  else url = URL_LIST + API_KEY;
  return function(dispatch){
    dispatch(fetchMovies());
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(error => dispatch(fetchMoviesFail(error)))
  }
}
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
export function fetchStarDetail(id){
  const url_star = URL_PERSON + id + API_KEY;
  return function(dispatch){
    dispatch(fetchMovie())
    return fetch(url_star)
      .then(response => response.json())
      .then(data => dispatch(fetchStarSuccess(data)))
      .catch(error => dispatch(fetchStarFail(error)))
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
----------------
import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
//import merge from 'lodash/merge'
import {
	FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,
  FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE,
  FETCH_STAR_SUCCESS, FETCH_STAR_FAILURE,
  FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE,
  FETCH_TRAILERS, FETCH_TRAILERS_SUCCESS, FETCH_TRAILERS_FAILURE,
  SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE,
  ENTER_SEARCH_TEXT} from '../actions'

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const movieList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_MOVIES:
    case SEARCH_MOVIE:
      return {...state, isFetching:true};
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
      return {...state, isFetching:false, items:action.data};
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIE_FAILURE:
      return {...state, isFetching:false, error:action.data};
    default:
      return state;
  }
};

const castList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_CASTS:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_CASTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_CASTS_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const trailerList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_TRAILERS:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_TRAILERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_TRAILERS_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const defaultState = {
  isFetching: false,
  item:{},
  error:{}
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        item:action.data
      });
    case FETCH_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const starDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_STAR_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        item:action.data
      });
    case FETCH_STAR_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const input = (state = '', action) => {
  switch (action.type){
    case ENTER_SEARCH_TEXT:
      return Object.assign({}, state, {
        isFetching:true
      });
    default:
      return state;
  }
};
const movieApp = combineReducers({
  movieList,
  castList,
  trailerList,
  movieDetail,
  starDetail,
  input,
  routing: routerReducer
});
export default movieApp;
=================
containers>index
import MovieContainer from './MovieContainer';
import MovieDetail from './MovieDetail';
import StarDetail from './StarDetail';
import SearchBar from './SearchBar';

export {MovieContainer, MovieDetail, StarDetail, SearchBar};
-------------
import React, {Component} from 'react'
import { Navbar, FormGroup, FormControl, Button, Image, Row, Col } from 'react-bootstrap/lib'
import TMDBlogo from '../images/themoviedb_green.svg'
import logo from '../images/logo_square.svg'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Autosuggest from 'react-autosuggest'
import theme from './search.css'
import { URL_SEARCH, API_KEY_ALT, URL_IMG, IMG_SIZE_XSMALL} from '../const';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      suggestions:[]
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  handleKeyDown = (event) => {
    if(event.key == 'Enter') {
      return this.handleSubmit(this.state.value);
    }
  }

  handleSubmit = (searchText) => {
    this.props.dispatch(push('/search/'+ searchText));
    this.setState({ value: ''});
  }


  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  onSuggestionsFetchRequested = ({ value }) => {
      const trimmedValue = value.trim();

      if (trimmedValue.length > 0) {
          let url = URL_SEARCH + trimmedValue + API_KEY_ALT;
            fetch(url)
              .then(response => response.json())
              .then(json => json.results)
              .then(data => {
                const results = data.map(movie => {
                  let temp = {}
                  temp.id = movie.id
                  temp.title = movie.title
                  temp.img = movie.poster_path
                  temp.year = (movie.release_date == "") ? "0000" : movie.release_date.substring(0,4)
                  return temp
                });
                this.setState({
                 suggestions: results
                });
              }).catch(error => console.log('Exception to get Suggestions'))
      }
      else {
        this.setState({
          suggestions: []
        })
      }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = (suggestion) => {
    return (
      <a>
      <img className="searchResult-image" src= {suggestion.img == null ? logo: URL_IMG+IMG_SIZE_XSMALL+suggestion.img } />
        <div className="searchResult-text">
          <div className="searchResult-name">
            {suggestion.title}
          </div>
          {suggestion.year}
        </div>
      </a>
    );
  };
  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === 'enter')
      event.preventDefault();
    this.props.dispatch(push('/movie/'+ suggestion.id));
    this.setState({ value: ''});
  };

render(){
  const brandStyle = {
    fontWeight: 'bold',
    textTransform: 'caplitalize',
    paddingLeft: 10,
    fontSize: '1.2em'
  };
  const imgStyle = {
    height: '200%',
    width: 'auto',
    paddingLeft: '10px',
    marginTop: '-8px',
    display: 'inline-block'
  };

  const {value, suggestions} = this.state;
  const inputProps = {
    value,
    onChange: this.onChange,
    onKeyPress: this.handleKeyDown,
    placeholder: 'Search Movie Title...'
  };

  return (
    <Navbar bsStyle='inverse'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#"><span style={brandStyle}>{this.props.brand}</span><Image style={imgStyle} src={TMDBlogo}/></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps} />
      </Navbar.Form>
    </Navbar>
  );
  }
}
export default connect()(SearchBar);
---------------
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
---------------
import React, { Component } from 'react';
import { MoviePoster, CastList, TrailerList} from '../components';
import { MovieInfo, Poster } from '../components';
import { fetchMovieDetail, fetchCastList, fetchTrailerList} from '../actions';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { connect } from 'react-redux';


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
---------------
import React, { Component } from 'react';
import { StarInfo, CastList, TrailerList, Poster, MovieList} from '../components';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import SubTitle from '../components/SubTitle'
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import { fetchStarDetail, fetchMovieList } from '../actions';

class StarDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchStarDetail(this.props.params.id));
    dispatch(fetchMovieList(this.props.params.id));
  }

  render() {
    const {star, movies} = this.props;

    if(star.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Poster id={star.id} path={star.profile_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <StarInfo star={star}/>
            </Col>
          </Row>
          <Row>
            <SubTitle title={'Known For'} />
            <MovieList movies={movies.slice(0,4)} />
          </Row>
        </Grid>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {starDetail, movieList} = state;
  const {item: star} = starDetail;
  const {items: movies} = movieList;

  return {star, movies}
}
export default connect(mapStateToProps)(StarDetail);
====================
import Cast from './Cast';
import CastList from './CastList';
import ChartData from './ChartData';
import DisplayMsg from './DisplayMsg';
import Title from './Title';
import SubTitle from './SubTitle';
import SubTitleWithIcon from './SubTitleWithIcon';
import Poster from './Poster';
import Description from './Description';
import MovieInfo from './MovieInfo';
import StarInfo from './StarInfo';
import MovieList from './MovieList';
import Trailer from './Trailer';
import TrailerList from './TrailerList';

export {
	Cast, CastList, ChartData, DisplayMsg, 
	MovieList, Poster, Description,
  StarInfo, MovieInfo, Title, SubTitle, SubTitleWithIcon,
  Trailer, TrailerList};
--------------
import React from 'react'
import Trailer from './Trailer'
import { Col } from 'react-bootstrap'

export default function TrailerList({data}) {
    let trailers = data.map(function(trailer) {
      return(
        <Col xs={12} sm={6} md={4} key={trailer.id} >
          <Trailer trailer={trailer.key} />
        </Col>
      );
    });

    const style = {
      marginTop: '15px'
    };

    const titleStyle = {
      paddingLeft: '20px'
    };
    
    if (trailers.length != 0){
      return(
        <div>
          <h3 style={titleStyle}>Trailers</h3>
          <div style={style}>{trailers}</div>
        </div>
      );
    } else
      return null;
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
import React from 'react';
import { Glyphicon } from 'react-bootstrap'
import styled from 'styled-components'

export default function SubTitleWithIcon(props){
  return(
      <h4><Glyphicon glyph={props.icon} /> {props.title}</h4>
  );
}
----------------
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
import React  from 'react';

export default function SubTitle(props){
  return(
    <h4>{props.title}</h4>
  );
}
-------------
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

    let movies = this.props.movies.filter(function(movie) {
      return movie.poster_path != null;
    }).map(function(movie) {
        return(
            <Col xs={6} sm={4} md={3} key={movie.id} >
            <Link to={'/movie/'+movie.id} ><Poster info id={movie.id} path={movie.poster_path} title={movie.title} voteAverage={movie.vote_average} release_date={movie.release_date} responsive /></Link>
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
import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'

export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px'
  };

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
          <Description category={'Overview'} description={props.movie.overview} />
        </Row>
      </div>
    );
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
      <Image className="image" key={props.id} src={URL_IMG+IMG_SIZE_LARGE+props.path} responsive />
      {props.info &&
      <Info className="title">
        <h4>{props.title}</h4>
        <Glyphicon glyph={'star'} /> {props.voteAverage} &nbsp;&nbsp; {props.release_date.substring(0,4)}
      </Info>
      }
    </StyledImg>
  );
}
------------
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

 export default function DisplayMsg(props) {

    if(!props.hasOwnProperty('message')){
      return(<div>Not Found</div>);
    } else  {
      return(<div>{props.message}</div>);
    }
}
-----------
import React from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
    var casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          <Col xs={4} sm={3} md={2} key={cast.id} >
            <StyledLink to={'/star/'+cast.id} ><Cast cast={cast} /></StyledLink>
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
------------
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