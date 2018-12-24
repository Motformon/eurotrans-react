import {combineReducers} from 'redux';

const initialState = {
	popups: {
		boss: false,
		thanks: false
	},
}

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
    case "BOSS":
			return state
    default:
      return state
  }
}


// import searchTicketReducer from './searchTicket';

// export default combineReducers({
// 	// searchTicket: searchTicketReducer
// 	mainPage: mainPageReducer,
// })