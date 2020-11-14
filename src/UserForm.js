import React from "react";

// DOM Form Elements like input, textarea and select maintain their own state and update it based on user input.
// In React mutable state is kept in the state property of components, and only updated with setState().
// We combine the two making the React state be the single source of truth. These components are called controlled components.
// <input type="file"> is an uncontrolled component because it's value is read-only and is updated via JavaScript's File API.
// If you are tired of writing event handler for every tag, use uncontrolled components.
// Some form solutions are Formik library.
export default class UserForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			fruit: "Mango"
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	handleChange(event) {
		this.setState({username: event.target.value});
	}

	handleSubmit(event) {
		window.alert("Username: " + this.state.username);
		event.preventDefault();
	}

	handleSelectChange(event) {
		this.setState({fruit: event.target.value})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.username} onChange={this.handleChange}/>
				</label>
				<select value={this.state.fruit} onChange={this.handleSelectChange}>
					<option value={"Apple"}>Apple</option>
					<option value={"Mango"}>Mango</option>
					<option value={"Banana"}>Banana</option>
					<option value={"Orange"}>Orange</option>
				</select>
			</form>
		);
	}
}
