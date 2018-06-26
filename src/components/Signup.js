import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {signUpUser} from '../actions'

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
	if(!values.passwordConfirmation){
		errors.passwordConfirmation='Please enter a password confirmation.'
	}
	if(values.passwordConfirmation && values.passwordConfirmation !== values.password){
		errors.password='Passwords do not match.'
	}
	return errors
}
class Signup extends Component{
	handleFormSubmit=values=>{
		this.props.signUpUser(values)
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
			<div className="auth-container-reg">
				<div className="auth-title"><h2>Sign Up</h2></div>
				<div className="form-container-reg">
					<div className="left-reg"></div>
					<div className="right-reg">
						{this.renderError()}
						<form className="formBox-reg" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
							<Field name="email" type="email" component={this.renderField} label="Email" />
							<Field name="password" type="password" component={this.renderField} label="Password" />
							<Field name="passwordConfirmation" type="password" component={this.renderField} label="Password Confirmation" />
							<button type="submit" className="auth-button-reg">Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps=state=>{
	return{authError:state.auth.error}
}
export default connect(mapStateToProps,{signUpUser})(reduxForm({form:'signup',validate})(Signup))