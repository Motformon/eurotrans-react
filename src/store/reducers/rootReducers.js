import {combineReducers} from 'redux';
import searchTicketReducer from './searchTicket';

export default combineReducers({
	searchTicket: searchTicketReducer
})