import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer} from './app-reducer';
import {defiReducer} from './defi-reducer';
import {developmentsReducer} from './developments-reducer';
import {educationReducer} from './education-reducer';
import {profileReducer} from './profile-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  defi: defiReducer,
  developments: developmentsReducer,
  education: educationReducer,
  profile: profileReducer,
});

export const store = createStore(rootReducer);

window.store = store;
