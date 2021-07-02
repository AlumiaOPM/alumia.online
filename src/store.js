import {
  createStore,
  combineReducers
} from 'redux';

import formReducer from './reducers/formReducer';
import webinarReducer from './reducers/webinarReducer';

const rootReducer = combineReducers({
  form: formReducer,
  webinar: webinarReducer
});

const store = createStore(rootReducer);

export default store;
