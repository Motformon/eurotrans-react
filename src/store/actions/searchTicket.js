import { DATA_WAY, MINUS_ADULT, MINUS_CHILD, PLUS_CHILD } from "./actionTypes";
import { PLUS_ADULT } from "../../../../../../../../opt/lampp/htdocs/projects/eurotrans-react/src/store/actions/actionTypes";




export function dataWay() {

	console.log('123') 

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