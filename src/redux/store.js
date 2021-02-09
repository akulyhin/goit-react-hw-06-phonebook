import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ADDTASK, REMOVETASKS, SETFILTER } from './constants/todoConstants';
import reducer from './reducers/contactsReducer';



const rootReducer = combineReducers({
    contacts: reducer,
})

export const store = createStore(rootReducer, composeWithDevTools());