import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {signInUser} from '../actions'
import {Link} from 'react-router-dom'

const validate=values=>{
	const errors={}
	if(!values.email){
		errors.email='Please enter an email.'
	}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
		errors.email='Invalid email address'
	}
	if(!values.password){
		errors.password='Please enter a password.'
	}
	return errors
}
class Login extends Component{
	handleFormSubmit=values=>{
		this.props.signInUser(values)
	}
	renderField=({input,label,type,meta:{touched,error}})=>(
		<fieldset className={`form-fieldset ${touched && error ? 'has-error':''}`}>
			<label className="form-label">{label}</label>
			<div>
				<input className="field-style" {...input} placeholder={label} type={type} />
				{touched && error && <div className="error">{error}</div>}
			</div>
		</fieldset>
	)
	renderError(){
		if(this.props.authError){
			return <div className="error">{this.props.authError}</div>
		}
		return <div></div>
	}
	render(){
		return(
			<div className="auth-container">
				<div className="auth-title"><h2>Log In</h2></div>
				<div className="form-container">
					<div className="left"></div>
					<div className="right">
						{this.renderError()}
						<form className="formBox" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
							<Field name="email" type="email" component={this.renderField} label="Email" />
							<Field name="password" type="password" component={this.renderField} label="Password" />
							<button type="submit" className="auth-button">Log In</button>
							<div className="small">Not Yet Signed Up? <Link className="auth-link" to="/signup">Create an account.</Link></div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps=state=>{
	return{
		authError:state.auth.error
	}
}
export default connect(mapStateToProps,{signInUser})(reduxForm({
	form:'login',validate})(Login))