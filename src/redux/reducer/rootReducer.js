// Packages
import favoriteReducer from './reducers/favoriteReducer';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  favoriteReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
