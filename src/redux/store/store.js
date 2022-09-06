// Packages
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Local
import rootReducer from '../reducer/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
