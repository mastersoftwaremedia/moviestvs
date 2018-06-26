import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addUserToFirebase, watchUserAddedEvt} from '../actions'
import {history} from '../configureStore'

class NewsLetter extends Component{
	constructor(){
		super()
		this.state={email:'',firstName:''}
		this.onChange=this.onChange.bind(this)
		this.onSubmit=this.onSubmit.bind(this)
	}
	onChange=e=>{
		this.setState({[e.target.name]:e.target.value})
	}
	onSubmit=e=>{
		e.preventDefault()
		const newUser={
			email:this.state.email,
			firstName:this.state.firstName
		}
		addUserToFirebase(newUser)
		this.setState({email:'',firstName:''})
	}

	render(){
		return(
			<div id="newsletter">
				<div className="newsletter_inner">
					<h2 className="">Get the best Movie &amp; TV Show trailers straight in your inbox each week.</h2>
					<form noValidate onSubmit={(!this.props.authenticated)? history.push('/login') : this.onSubmit.bind(this)}>
						<div className="sign_up_form">
						<input name="email" type="email" placeholder="Email Address" 
						value={this.state.email} onChange={this.onChange}/>
						<input name="firstName" type="text" placeholder="First Name" 
						value={this.state.firstName} onChange={this.onChange}/>
						<button type="submit" className="button">Subscribe</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
const mapStateToProps=state=>{
	return{
		users:state.users,
		authenticated:state.auth.authenticated
	}
}
const matDispatchToProps=dispatch=>{
	watchUserAddedEvt(dispatch)
	return {}
}
export default connect(mapStateToProps,matDispatchToProps)(NewsLetter)