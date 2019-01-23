import { DATA_WAY, MINUS_ADULT, MINUS_CHILD, PLUS_ADULT, PLUS_CHILD, CHOICE_FROM, CHOICE_TO, SEARCH_TO, SEARCH_FROM, DATE_TICKET } from "./actionTypes";



export function dataWay() {
	return {
		type: DATA_WAY 
	}
}

export function minusAdult(event) {
	event.preventDefault();
	return {
		type: MINUS_ADULT
	}
}

export function plusAdult(event) {
	event.preventDefault();
	return {
		type: PLUS_ADULT
	}
}

export function minusChild(event) {
	event.preventDefault();
	return {
		type: MINUS_CHILD
	}
}

export function plusChild(event) {
	event.preventDefault();
	return {
		type: PLUS_CHILD
	}
}


export function ChoiceFromSity(event) {
	const value = event.target.textContent;
	return {
		type: CHOICE_FROM, value
	}
}

export function ChoiceToSity(event) {
	const value = event.target.textContent;
	return {
		type: CHOICE_TO, value
	}
}

export function SearchFromSity(event) {
	const value = event.target.value;
	return {
		type: SEARCH_FROM, value
	}
}

export function SearchToSity(event) {
	const value = event.target.value;
	return {
		type: SEARCH_TO, value
	}
}
export function dateTicket(date) {
	return {
		type: DATE_TICKET, date
	}
}