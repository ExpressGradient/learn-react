# Thinking in React
## 1. Break the UI into a Component Hierarchy.

## 2. Build a static version in React.
Build a version which takes your data model and renders the UI but has no interactivity.  
Don't use state at all to build this static version only use props.

## 3. Identify the minimal, but complete representation of UI state.
If you're building a Todo app, you'd need an array of Todos.  
Think of all pieces of data in our application.  
Go through each one and figure out which one is state. Ask three questions about each piece of data.  
* Is it passed in from a parent via props? If so, it probably isn’t state.
* Does it remain unchanged over time? If so, it probably isn’t state.
* Can you compute it based on any other state or props in your component? If so, it isn’t state.

## 4. Identify where your state should live.
Identify which component should own or mutate the state.  
For each piece of state in your application.  
* Identify every component that renders something based on that state.
* Find a common owner component (a single component above all the components that need the state in the hierarchy).
* Either the common owner or another component higher up in the hierarchy should own the state.
* If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

## 5. Add inverse data flow.
The components in the hierarchy need to update the state.
