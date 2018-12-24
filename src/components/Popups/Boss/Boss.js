import React, {Component} from 'react';
import {connect} from "react-redux";
class Boss extends Component {

render() {
console.log(this.props);
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
				<form id="order-popup-boss" className="popup-boss__form-order" method="POST" onsubmit='return false;'>
					<input class='popup-boss__form-inf' type="text" name="name" placeholder="Ваше имя" required/>
					<input class='popup-boss__form-inf popup-boss__form-inf--phone' type="text" name="phone" placeholder="Ваш телефон" required/>
					<input class='popup-boss__form-inf' type="email" name="email" placeholder="Ваш email" required/>
					<textarea name="text" class='popup-boss__form-inf popup-boss__form-inf--textarea' placeholder='Текст обращения'></textarea>
					<input class='popup-boss__button' type="submit" value="Отправить" onclick='sendCalcMail();'/>
				</form>
			</div>
		</div>
	)}
};

// export default Boss;


function mapStateToProps(state) {
	return {
		mainPage: state.mainPage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onBossHide: () => dispatch({type: 'BOSS_HIDE'})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Boss);


