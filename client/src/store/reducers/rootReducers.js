import mainPage from "./mainPage";
import booking from "./booking";
import searchTicket from "./searchTicket";
import {combineReducers} from 'redux';


export default combineReducers({
	mainPage,
	booking,
	searchTicket
})