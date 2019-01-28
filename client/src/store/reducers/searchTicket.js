import { DATA_WAY, MINUS_ADULT, PLUS_ADULT, PLUS_CHILD, MINUS_CHILD, CHOICE_FROM, CHOICE_TO, SEARCH_TO, SEARCH_FROM, DATE_TICKET } from "../actions/actionTypes";


const initialState = {
	passengerAdult: 1,
	passengerChild: 0,
	date: '',
	valueFrom: '',
	valueTo: '',
	routes: [],
}

export default function searchTicket(state = initialState, action) {
	switch (action.type) {
		case MINUS_ADULT:
			let passengerResult = state.passengerAdult - 1;

			if(passengerResult < 1) {
				passengerResult = 1;
			}
			return {
				...state ,passengerAdult: passengerResult
			}
		case PLUS_ADULT:
			return {
				...state ,passengerAdult: state.passengerAdult + 1
			}
		case MINUS_CHILD:
			let passengerResultChild = state.passengerChild - 1;

			if(passengerResultChild < 0) {
				passengerResultChild = 0;
			}
			return {
				...state ,passengerChild: passengerResultChild
			}
		case PLUS_CHILD:
			return {
				...state ,passengerChild: state.passengerChild + 1
			}
		case CHOICE_FROM:
			return {
				...state, valueFrom: action.value
			}
		case CHOICE_TO:
			return {
				...state, valueTo: action.value
			}
		case SEARCH_TO:
			return {
				...state, valueTo: action.value
			}
		case SEARCH_FROM:
			return {
				...state, valueFrom: action.value
			}
		case DATE_TICKET:
			return {
				...state, date: action.date
			}
		case DATA_WAY:
			return {
				...state, routes: action.routes
			}
    default:
      return state 
  }
}
