import React from "react";

// Some components don't know their children ahead of time. For example, components like SideBox or Dialog are generic "boxes".
// By using props.children, other components pass arbitrary children to them by nesting the JSX.
export default function FancyBorder(props) {
	return(
		<div className={"fancy-border fancy-border-" + props.color}>
			{props.children}
		</div>
	);
}

// Specialization: Sometimes components can be special cases for other components.
// For example, WelcomeDialog might be a special case for Dialog component.
// We can achieve this by composition, where a more specific component renders a more generic one and configures it with props.
function Dialog(props) {
	return(
		<FancyBorder color={"blue"}>
			<h1 className={"dialog-title"}>{props.title}</h1>
			<p className={"dialog-message"}>{props.message}</p>
		</FancyBorder>
	);
}

function WelcomeDialog() {
	return <Dialog title={"Welcome Bois and Gurls"} message={"There's no message"} />
}
