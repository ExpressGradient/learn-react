import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// JSX is safe, ReactDOM escapes any values embedded in JSX before rendering.
const maliciousElement = <p>Something malicious</p>

// Components let you split the UI into independent, reusable pieces and think about each piece in isolation.
function Welcome(props) {
	return <h1>Hello {props.name}</h1>
}

// We can even use a class to define a component.
// Components can refer to other components in their output.
class WelcomeClassComponent extends React.Component {
	render() {
		return <Welcome name={this.props.name} />
	}
}

// Start components with a capital letter. React treats components starting with lowercase letters as DOM tags.
// Props are read-only. React components are like pure functions. It must never modify it's own props.

// React elements are plain objects.
// This is known as JSX, it's a syntax extension to JavaScript.
const element = (
	<div>
		<h1>Hello World, {2 + 1}</h1>
		{maliciousElement}
		<WelcomeClassComponent name={"discoding"} />
	</div>
)

// React elements are immutable.
// React DOM compares the element and it's children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

// To render an element into the dom, use the render() by ReactDOM.
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
