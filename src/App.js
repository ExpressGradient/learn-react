import React from "react";
import UserForm from "./UserForm";
import FancyBorder from "./Composition";

export default function App() {
	const nums = [1, 2, 3, 4];

	return(<>
		<Clock />
		<ActionLink />
		<Toggle />
		<Greeting loggedIn={true} unReadMessages={false} />
		<Warning warn={false} warnMessage={"Its the end of the world"}/>

		{/*Rendering a list.*/}
		{/*Keys help React identify which items have changed, are added, or removed.
		Keys must be unique among siblings.*/}
		<ul>
			{nums.map(num => <li key={num}>{num}</li>)}
		</ul>
		<UserForm />

		<FancyBorder color={"red"}>
			<h1>Hello World</h1>
			<p>I'm inside the {"<FancyBorder/>"} component</p>
		</FancyBorder>
	</>);
}

// React events are named using camelCase, rather than lowercase.
// With JSX you can pass a function as the event handler, rather than a string.
function ActionLink() {
	function handleClick(event) {
		// To prevent default behavior of an event.
		// Here event is a synthetic event.
		event.preventDefault();
		console.log("This link was clicked");
	}

	return <a href="/" onClick={handleClick}>Click Me!</a>
}

// Handling events in a class component.
class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {toggle: false};

		// Class methods are not bound by default.
		// When you call a class method outside of class, as in when rendered, "this" is lost.
		// So when you bind "this" with handleClick and set the handleClick again, it calls original handleClick with "this".
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		this.setState((state) => ({toggle: !state.toggle}))
	}

	// Use class fields to bind callbacks. This is an experimental feature enabled by babel and create-react-app.
	handleClickUsingPublicClassField = (event) => {
		event.preventDefault();
		this.setState((state) => ({toggle: !state.toggle}));
	}

	render() {
		return(<>
			<button onClick={this.handleClick}>{this.state.toggle ? "On" : "Off"}</button>
			<button onClick={this.handleClickUsingPublicClassField}>{this.state.toggle ? "On" : "Off"}</button>

			{/* You can even use an arrow function in a callback.
			 But the problem with this syntax is that, a different callback is created each time the Toggle renders.
			 If this callback is passed as prop to child components, those components might do extra re-rendering*/}
			<button onClick={() => this.setState((state) => ({toggle: !state.toggle}))}>{this.state.toggle ? "On" : "Off"}</button>
		</>);
	}
}

// State and Lifecycle functions
// Clock component
class Clock extends React.Component {
	constructor(props) {
		super(props);
		// Component State.
		this.state = {
			date: new Date(),
			counter: 0
		}
	}

	// Lifecycle methods
	// Runs after a component's output has been rendered onto the DOM.
	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	// Runs when a component will unmount.
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// setState(), updates the state and calls the render again. Don't directly set the state, only use the setState().
	tick = () => this.setState({date: new Date()});

	// React may batch multiple setState() calls into a single update for performance.
	// Because this.state and this.props are async, you should not rely on them for calculating the next state.
	// React merges the newState by setState() into the current state. This merging is shallow.
	setSomething = () => this.setState((state, props) => ({counter: state.counter + props.increment}));

	// Output of this component.
	render() {
		return <h1>Its {this.state.date.toLocaleTimeString()} now</h1>
	}
}

// Unidirectional data flow.
// Neither parent or child components can know if a certain component is stateless or stateful.
// State is often called as local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
// A component may choose to pass its state down as props to its child components.


// Conditional Rendering.
function Greeting(props) {
	if(props.loggedIn) {
		return(<>
			<h1>Hello User</h1>
			{/*JavaScript logical && expression. If logical is true, then expression is evaluated, else it return false.
			In this case, React will ignore and skip it.*/}
			{props.unReadMessages && <h2>You have some unread messages</h2>}

			{/*Conditional Operator*/}
			{props.unReadMessages ? <h2>You have some unread messages</h2> : <h2>You have zero messages</h2>}
		</>);
	}

	return <h1>Please Login</h1>
}

// Preventing component from rendering.
function Warning(props) {
	if(props.warn) {
		return <h1>Warning!!!, {props.warnMessage}</h1>
	}

	return null;
}
