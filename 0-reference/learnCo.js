steps:React Router
React Router Nested Routes
React Components As Routes Lab
React Router Params
React Redux Nested Routes Lab
React Components As Routes

Home Page
Movies Page
Directors Page
Actors Page
=>
src/
├── data.js=>seed data for Actors, Movies & Directors
├── index.js=>BrowserRouter as Router
|-- containers/
|   |-- App.js=>Navbar and 4 React Router Route components with paths to /, /movies, /directors & /actors
└── components/
    ├── Actors.js
    ├── Directors.js
    ├── Home.js
    ├── Movies.js
    └── NavBar.js=><NavLink> components. They will be for /, /movies, /directors, /actors
==========
// ./src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink style={{ marginRight: '10px' }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/movies">
        Movies
      </NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/movies/new">
        Add Movie
      </NavLink>
    </div>
  );
}
export default NavBar;
----------
// ./src/containers/MoviesPage.js
/*import React from 'react';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ movies }) => 
  <div>
    <MoviesList movies={movies} />
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(MoviesPage);*/
=>
// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = ({ match, movies }) => 
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(MoviesPage);
=>
// src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) => 
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/new`} component={MoviesNew} />
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(MoviesPage);
=>
// ./src/containers/MoviesPage.js
import React from 'react';
import { Route, Switch } from 'react-router-dom'; // notice we are now importing Switch
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) => 
  <div>
    <MoviesList movies={movies} />
    <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
      <Route path={`${match.url}/new`} component={MoviesNew} />
      <Route path={`${match.url}/:movieId`} component={MovieShow}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a Movie from the list.</h3>
      )}/>
    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}
export default connect(mapStateToProps)(MoviesPage);
-------------
// ./src/components/MoviesList.js
/*import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie => 
    <Link key={movie.id} 
		to={`/movies/${movie.id}`}>{movie.title}</Link>
  );
  return (
    <div>
      {renderMovies}
    </div>
  );
};
export default MoviesList;*/
=>
// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie => 
    <Link to={`/movies/${movie.id}`}>
		{movie.title}
		</Link>
  );
  return (
    <div>
      {renderMovies}
    </div>
  );
};
export default MoviesList;
------------------
=>
// ./src/containers/MoviesShow.js
/*import React from 'react';

const MoviesShow = props => {
  return (
    <div>
      <h3>Movies Show Component!</h3>
    </div>
  );
}
export default MoviesShow;*/
=>
// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

const mapStateToProps = (state) => {}

export default connect(mapStateToProps)(MovieShow);
=>
// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

const mapStateToProps = (state, ownProps) => {
  return {
    movieId: ownProps.match.params.movieId
  }
}
export default connect(mapStateToProps)(MovieShow);
=>
// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => 
		movie.id == ownProps.match.params.movieId)
  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}
export default connect(mapStateToProps)(MovieShow);
=>
// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = ({ movie }) =>
  <div>
    <h3>Title: {movie.title}</h3>
  </div>

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)

  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}
export default connect(mapStateToProps)(MovieShow);
----------
//src/containers/MoviesNew
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class MoviesNew extends Component {
  constructor() {
    super();
    this.state = {title: ''};
  }
  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    addMovie(this.state);
    // redirect to /movies route
    history.push('/movies')
  }
  handleOnChange = event => {
    this.setState({title: event.target.value});
  }
  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input 
          type="text" 
          onChange={this.handleOnChange} 
          placeholder="Add a Movie" />
        <input type="submit" value="Add Movie" />
      </form>
    );
  }
}
export default connect(null, { addMovie })(MoviesNew)
==========
[1] React Router Nested Routes

OBJECTIVES
-Describe how React Router allows nesting routes
-Explain how to organize routes in a standard React & React Router application

OVERVIEW
In the previous lesson, we saw how to have routes dynamically render different components. However, as you may have noticed, each time we rendered one component, our previous component disappeared. In this lesson, we'll see how routes can be used to specify multiple components to render.

MASTER DETAIL WITHOUT ROUTES
Have you ever used Apple's Messages app for your Mac? How about Gmail? What about YouTube? All of those apps use some version of a "Master-Detail" interface. This is when there is something pertaining to the entire resource, such as a list of all messages, videos, or emails, and some more detailed display of a specific item or action on another portion of the screen. Clicking on a new item in the list changes which item we have selected.

NESTING
With React-Router, we can make the master-detail pattern by making our components children of each other. Take YouTube for example. Let's pretend that visiting /videos displays a list of videos. Clicking on any video keeps our list of videos on the page, but also displays details on the selected video. This should be updated by the URL - the URL should have changed to /videos/:videoId. The VideoDetail in this case is a 'Nested Component' of '/videos' - it will always have the list rendered before it.

CODE ALONG

RENDERING OUR LIST
To begin, let's take a look at our starter code. First, we have a MoviesPage component. This component is responsible for connecting to our store and loading our list of movies. A common pattern in Redux is to refer to these as container components and put them in a containers directory. Here we've named ours MoviesPage - again, a common naming pattern for container components.
=>
// ./src/containers/MoviesPage.js
import React from 'react';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ movies }) => 
  <div>
    <MoviesList movies={movies} />
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
We are using the mapStateToProps() function to pull the movies property from our store's state and attach it to the props of this component. As you see, our MoviesPage just renders out a MoviesList component. In this case, our MoviesPage component is purely presentational.

Let's create our MoviesList component to render React Router Links for each movie.

// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie => 
    <Link key={movie.id} to={`/movies/${movie.id}`}>{movie.title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;

LINKING TO THE SHOW
Right now, we're using React Router to display the MoviesPage component when the url is /movies (You can look at the code in /src/containers/App.js). Let's add in our first nested route so that going to '/movies/:movieId' will display details about a given movie using a MoviesShow component.

Let's create our MoviesShow component. Later on, we will see that this component will need to connect to the store in order to figure out which Movie it should render, but first let's put it in our containers directory.

Note: Remember, containers are components that are directly connected to the store via the connect function.

// ./src/containers/MoviesShow.js
import React from 'react';

const MoviesShow = props => {

  return (
    <div>
      <h3>Movies Show Component!</h3>
    </div>
  );
}

export default MoviesShow;
Next, we need to add a nested route in our src/containers/MoviesPage.js file to display the MovieShow container if that route matches /movies/:movieId

// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';

const MoviesPage = ({ match, movies }) => 
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
With the MoviesPage container we are now adding two Route components. You will notice that we are inheriting match from this.props this is a POJO that contains the current url. so we are able to show stuff depending on what the match.url returns. In the 2nd Route component we are defining a path of ${match.url}/:movieId. This will load the MovieShow component when the url looks something like movies/1.

Lets go ahead and make sure that our MoviesList component has links to get to this nested route.

// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = movies.map(movie => 
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;
Awesome! Refresh the page at /movies. Now, clicking a link changes the route, but we're not actually seeing any content about that movie that would be in our MoviesShow page. You should only see the text Movies Show Component!. Don't worry we will work on showing the movie details in the next lesson.

SUMMARY
So far we saw how to set up our nested routes. We do so by making two Route components. One Route component that renders a component if it is a perfect match with the url or the nested Route if it includes the match.url and the nested key (in this case :movieId).

==========
React Router Params
OBJECTIVES
-Learn how React Router passes through params to a React Router rendered component
-Learn how to use React Router to change the displayed url

REVIEW
In the previous lesson, we successfully created our nested route, and saw how to render the MovieShow component. While our application now renders the MovieShow component upon visitng a url like /movies/3, we are not yet displaying information from that particular movie with the id of 3. Let's change this.

DYNAMICALLY FINDING THE SHOW
Let's wire up our MovieShow component to dynamically render the info about the movie based on the URL. The steps to do so will be as follows:
1. Connect our MovieShow component to our Redux store so that it knows about the list of movies.
2. Find the movie where the movie's id matches the :movieId param of our route.
3. Make that movie available to the component via props.

First, let's import connect and use our mapStateToProps function to let our MoviesShow component know about changes to the store.

// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

const mapStateToProps = (state) => {}

export default connect(mapStateToProps)(MovieShow);
=>
Now, in mapStateToProps, we'd like to access the :movieId supplied to us via the URL. We need to understand two things for this to work.
1. mapStateToProps takes a second argument of props that were passed directly to the component. We usually refer to these as ownProps
2. React Router will supply any dynamic pieces of the URL to the component via an object called match.params as own props of the related component.

This means that we can access the :movieId from the URL via match.params on our ownProps

// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>;

const mapStateToProps = (state, ownProps) => {
  return {
    movieId: ownProps.match.params.movieId
  }
}

export default connect(mapStateToProps)(MovieShow);
Note that we have a property called movieId because of the way we defined our route. If we defined our dynamic portion to be /movies/:dog, we'd have a dog property in our match.params.

Now, we can simply iterate through our list of movies and return the one where our route matches.
=>
// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = props =>
  <div>
    <h3>Movie Show Component!</h3>
  </div>

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)

  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}

export default connect(mapStateToProps)(MovieShow);
Now, assuming we find a movie, we simply add it to the props. To account for the case where a movie isn't found, we return just an empty object as the movie.

The last thing we need to do is add the title in our MovieShow's render function.

// ./src/containers/MovieShow.js
import React from 'react';
import { connect } from 'react-redux';

const MovieShow = ({ movie }) =>
  <div>
    <h3>Title: {movie.title}</h3>
  </div>

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)

  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}

export default connect(mapStateToProps)(MovieShow);
ADDING THE NEW OPTION
Let's add our second nested route. Going to '/movies/new' should display the MoviesNew component.

We've already created out MoviesNew component - it's a simple form that dispatches the addMovie action on submission. Let's add that into our Route, the same way we did with our Show component.

Note that we must define our /movies/new route first. Why? Because otherwise, the /:id route handler would catch it first and assessing "new" to be the id.

Let's add a link to our Movies List to add a new movie.

// src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) => 
  <div>
    <MoviesList movies={movies} />
    <Route path={`${match.url}/new`} component={MoviesNew} />
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
And lets not forget to add a link in our NavBar component to go to this URL.

// ./src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/movies"
      >
        Movies
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/movies/new"
      >
        Add Movie
      </NavLink>
    </div>
  );
}

export default NavBar;
So let's try this out in the browser to see if it loads the MoviesNew component. Everything looks good except for one thing. It is now loading the MoviesNew & the MovieShow component. Why is that?? Well, if you notice movies/new and movies/:movieId could look like the same route to React Router unless we are more explicit. I think it is time to introduce React Router's Switch component. The Switch component's real power is that it uniquely renders a route exclusively. Compare this to the Route component that renders inclusively all of the matching routes (which is why it is rendering both components right now). Let's update our MoviesPage component so that it uses the Switch component.

// ./src/containers/MoviesPage.js
import React from 'react';
import { Route, Switch } from 'react-router-dom'; // notice we are now importing Switch
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) => 
  <div>
    <MoviesList movies={movies} />
    <Switch> {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
      <Route path={`${match.url}/new`} component={MoviesNew} />
      <Route path={`${match.url}/:movieId`} component={MovieShow}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a Movie from the list.</h3>
      )}/>
    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
REDIRECTING
Finally, it would be nice if after creating the new Movie, we could "redirect" the user back to the '/movies' route. Luckily, React Router gives us a nice interface to do this.

All of our components that are nested within <Router>, which is currently all of our application, have passed down props of history. Thie history object has a function call push() that takes in a url string to update the page URL and redirect. Let's add this to our MoviesNew's handleOnSubmit() function.

//src/containers/MoviesNew
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class MoviesNew extends Component {

  constructor() {
    super();

    this.state = {
      title: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    const { addMovie, history } = this.props;
    // Create the movie with the Redux action
    addMovie(this.state);
    // redirect to /movies route
    history.push('/movies')
  }

  handleOnChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input 
          type="text" 
          onChange={this.handleOnChange} 
          placeholder="Add a Movie" />
        <input type="submit" value="Add Movie" />
      </form>
    );
  }
}

export default connect(null, { addMovie })(MoviesNew)
Now when we add a movie we are sent back to our /movies and it loads the MoviesPage component.

SUMMARY
So in this section we saw how upon visiting a url, React Router will supply any dynamic pieces of the URL to the related component via an object called match.params. We then saw how to access those props in our mapStateToProps function as ownProps, and how to use those props to find the related movie.

Then we saw how after taking an action like creating a new movie, we can change the url by using the history object that is supplied to our component as props. So a call to history.push('/movies') changes the url to /movies.
