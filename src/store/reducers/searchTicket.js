import { DATA_WAY, MINUS_ADULT, PLUS_ADULT, PLUS_CHILD, MINUS_CHILD } from "../actions/actionTypes";


const initialState = {
	passengerAdult: 1,
	passengerChild: 0,
	date: '',
	valueFrom: '',
	valueTo: '',
	// https://erp.evrotrans.net/search_reis.php?date_search=04-01-2019&place_start=%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D1%8B%D0%B9&place_end=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6
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
    default:
      return state 
  }
}
