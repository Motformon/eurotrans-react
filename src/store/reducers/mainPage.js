import { BOSS_SHOW, BOSS_HIDE } from "../actions/actionTypes";


const initialState = {
	popups: {
		boss: false,
		thanks: false
	},
	
}

export default function mainPage(state = initialState, action) {
	switch (action.type) {
    case BOSS_SHOW:
			return {
				popups: {
					boss: true,
					thanks: false
				}
			}
    case BOSS_HIDE:
			return {
				popups: {
					boss: false,
					thanks: false
				}
			}
    default:
      return state
  }
}
