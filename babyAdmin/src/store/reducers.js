import { combineReducers } from 'redux';
import main from '../reducers/main';
import index from '../reducers/index'
import home from '../reducers/home'

export default  combineReducers({
  main,
  index,
  home
});
