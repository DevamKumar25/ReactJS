// Action types
// action is a plain Js that describe what happend in a app
// action have a type and optional payload

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
