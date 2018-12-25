import { BOSS_SHOW, BOSS_HIDE, DATA_WAY } from "./actionTypes";

export function bossShow() {
	return {
		type: BOSS_SHOW
	}
}
export function bossHide() {
	return {
		type: BOSS_HIDE
	}
}
export function dataWay() {

	console.log('123')

	return {
		type: DATA_WAY
	}
}