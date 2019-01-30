import React, {Component} from 'react';
import {connect} from "react-redux";
import {bossHide} from "../../../store/actions/actions";
import axios from "axios"
class Boss extends Component {

state = {
	data: {
		name: 'test'
	},
	thanksModal: false
}

submitBossHandler = (e) => {
	e.preventDefault();

	const { data }= this.state;

	const str = JSON.stringify(data);
	
	

	axios.post('/api/send-boss', `result=${str}`)
		.then((response) => {
			console.log(response)

			bossHide()	
		})
		.catch((error) => {
			console.log(error);
		});

}

render() {
	return (
		<div className="popup-boss" >
			<div 
				className="popup-boss__mask"
				onClick={this.props.onBossHide}
			></div>
			<div className="popup-boss__window">
				<div 
					className="popup-boss__close"
					onClick={this.props.onBossHide}
				></div>
				<form id="order-popup-boss" className="popup-boss__form-order" method="POST">
					<input className='popup-boss__form-inf' type="text" name="name" placeholder="Ваше имя" required/>
					<input className='popup-boss__form-inf popup-boss__form-inf--phone' type="text" name="phone" placeholder="Ваш телефон" required/>
					<input className='popup-boss__form-inf' type="email" name="email" placeholder="Ваш email" required/>
					<textarea name="text" className='popup-boss__form-inf popup-boss__form-inf--textarea' placeholder='Текст обращения'></textarea>
					<input className='popup-boss__button' type="submit" value="Отправить" onClick={this.submitBossHandler}/>
				</form>
			</div>
		</div>
	)}
};


function mapStateToProps(state) {
	return {
		mainPage: state.mainPage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onBossHide: () => dispatch(bossHide())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Boss);


