import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {signOutUser} from '../actions'

class Header extends Component{
	handleSignOutUser(){
		this.props.signOutUser()
	}
	renderLinks(){
		if(this.props.authenticated){
			return[
				<Link to="/movies" key={1}>Movies</Link>,
				<Link to="/shows" key={2}>TV Shows</Link>,
				<Link to="/favorites" key={3}>My Favorites</Link>,
				<a className="img_cursor" onClick={()=>this.handleSignOutUser()} key={4}>Sign Out</a>
			]
		}else{
			return[
				<Link to="/login" key={1}>Login</Link>,
				<Link to="/signup" key={2}>Sign Up</Link>
			]
		}
	}
	render(){
		return(
			<div id="top_header" className="clearfix">
				<div className="wrapper">
					<h1 className="logo"><Link to="/" className="logo_inside">MOVIES<span>&amp;</span>TvSHOWS</Link></h1>
					<a href="" className="menu"><i className="fa fa-bars" aria-hidden="true"></i></a>
					<nav id="main_nav">
						{this.renderLinks()}
					</nav>
				</div>
			</div>
		)
	}
}
const mapStateToProps=(state)=>{
	return{authenticated:state.auth.authenticated}
}
export default connect(mapStateToProps,{signOutUser})(Header)
