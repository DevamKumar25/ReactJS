import { createStore } from 'redux';
import counterReducer from './Reducer';

// Create Redux store using the reducer
const store = createStore(counterReducer);

export default store;


// store = the object that holds the state of the application,it is created 
// using createStore() function
