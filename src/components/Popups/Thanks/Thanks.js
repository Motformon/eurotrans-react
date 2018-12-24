import React, {Component} from 'react';

class Thanks extends Component {

render() {

	return (
	<div className="popup-thank">
		<div className="popup-thank__mask"></div>
		<div className="popup-thank__window">
			<div className="popup-thank__close"></div>
			<img src="/img/gen-dir.jpg" alt="EuroTrans" className="popup-thank__img"/>
			<p className="popup-thank__text">Спасибо, что помогаете нам стать лучше. Я лично рассмотрю ваше обращение и отвечу вам на него в течение трех дней.</p>
		</div>
	</div>
	)}
};

export default Thanks;


