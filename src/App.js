import React, {Component} from 'react';
import {Router,Route,Redirect,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {history} from './configureStore'
import Header from './components/Header'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Favorites from './components/Favorites'
import MoviesSearch from './components/MoviesSearch'
import ShowsSearch from './components/ShowsSearch'
import Movie from './components/Movie'
import Show from './components/Show'
import MovieItems from './components/MovieItems'
import ShowItems from './components/ShowItems'
import NotFound from './components/NotFound'

const PrivateRoute=({component:Component, authenticated, ...rest})=>{
	return(
		<Route {...rest}
		render={(props)=>authenticated===true ?
			<Component {...rest} {...this.props} {...props}  /> :
			<Redirect to={{pathname:'/login',state:{from:props.location}}} />
		}/>
	)
}
const PublicRoute=({component:Component, authenticated, ...rest})=>{
	return(
		<Route {...rest}
		render={(props)=>authenticated===false ?
			<Component {...rest} {...this.props} {...props} /> :
			<Redirect to='/' />
		}/>
	)
}

class App extends Component {
  render() {
    return (
		<Router history={history}>
      <div>
        <Header />
        <div>
				<Switch>
					<Route exact path="/" component={Home} />
					<PublicRoute authenticated={this.props.authenticated} 
					exact path='/signup' component={Signup} />
					<PublicRoute authenticated={this.props.authenticated} 
					exact path='/login' component={Login} />
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/movies' component={MoviesSearch} />
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/movies/:id' component={Movie} />		
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/movies/v2/:id' component={MovieItems} />		
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/shows' component={ShowsSearch} />		
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/shows/:id' component={Show} />	
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/shows/v2/:id' component={ShowItems} />						
					<PrivateRoute authenticated={this.props.authenticated} 
					exact path='/favorites' component={Favorites} />
					<Route exact path='/not-found' component={NotFound} />
				</Switch>
				</div>
      </div>
		</Router>
    )
  }
}
const mapStateToProps=state=>{
	return{authenticated:state.auth.authenticated}
}
export default connect(mapStateToProps,null)(App)