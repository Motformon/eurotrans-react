import { BOSS_SHOW, BOSS_HIDE } from "./actionTypes";

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