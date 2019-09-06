- [ ] Why would you use class component over function components (removing hooks from the question)?

You would use class components over function components if you wanted to use local state for that component, or if you wanted to access any of the lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.

1. `ComponentDidMount` is called as soon as the component is mounted and ready. This is where you'd typically make HTTP requests.

2. `ComponentDidUpdate` is invoked as soon as the updating phases happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.

- [ ] What is the purpose of a custom hook?

The main purpose of a custom hook is to share stateful logic between components.

- [ ] Why is it important to test our apps?

It's important to test your apps to ensure that your code is safe and corect. It helps prevent
runtime errors in your code that could potentially cost you with the loss of customer's and/or money.