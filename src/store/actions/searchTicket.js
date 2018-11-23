// import axios from "../../axios/axios-quiz";
// import {TEST} from "./actionTypes";



// export function quizAnswerClick(answerId) {
// 	return (dispatch, getState) => {

// 		const state = getState().quiz;

// 		if(state.answerState) {
// 			const key = Object.keys(state.answerState)[0]
// 			if(state.answerState[key] === 'success') {
// 				return
// 			}
// 		}

// 		const question = state.quiz[state.activeQuestion];
// 		const results = state.results;

// 		if(question.rightAnswerId === answerId) {

// 			if(!results[question.id]) {
// 				results[question.id] = 'success'
// 			}

// 			dispatch(quizSetState({[answerId] : 'success'}, results));


// 		} else {
//       results[question.id] = 'error';
//       dispatch(quizSetState({[answerId]: 'error'}, results));

// 		}

// 	}
// }

// export function quizSetState(answerState, results) {
//   return {
//     type: TEST,
//     answerState, results
//   }
// }

