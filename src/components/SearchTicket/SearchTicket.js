
// import 'flatpickr/dist/themes/material_green.css'

import React, {Component} from 'react';
import Flatpickr from 'react-flatpickr';

import Passenger from './Passengers/Passengers'
import SityChoice from './SityChoice/SityChoice'


class SearchTicket extends Component {

state = {
	passengerMale: 0,
	passengerFemale: 0,
	date: new Date(),
	valueFrom: '',
	valueTo: '',
}


onClickChoiceFromSityHandler = (event) => {
	const value = event.target.textContent;
	this.setState({
		valueFrom: value,
	})
}

onClickChoiceToSityHandler = (event) => {
	const value = event.target.textContent;
	this.setState({
		valueTo: value,
	})
}

// onChangeSearchFromHandler = (event) => {
// 	const value = event.target.value;
// 	this.setState({
// 		valueFrom: value,
// 	})
// 	const destinationFrom = this.props.destinationFrom;
	
// 	let newSityArr = [];

// 	Object.keys(destinationFrom).forEach(elem => {
		
// 		let nameSity = destinationFrom[elem].name.toLowerCase();
// 		let valueLowerCase =  value.toLowerCase();
// 		console.log(nameSity, valueLowerCase);

// 	});

// }


render() {

	const { date } = this.state;

	const destinationFrom = this.props.destinationFrom;
	const destinationTo = this.props.destinationTo;                       

	return (
	<form className="booking-form main-header__form" action="/projects/eurotrans-react/booking.php" id="main-header__form">
		<div className="booking-form__container" id="cityFromHeader">

			<SityChoice
				labelText = {'Откуда'}
				labelHtmlFor = {'from'}
				inputIdName = {'from'}
				inputPlaceholder = {'Город отправления'}
				destination = { destinationFrom }
				valueInput = {this.state.valueFrom}
				onClickChoiceSityHandler = {this.onClickChoiceFromSityHandler}
				onChangeSearchHandler = {this.onChangeSearchFromHandler}
			/>
	
		</div>
		<div className="booking-form__container" id="cityToHeader">

		<SityChoice
				labelText = {'Куда'}
				labelHtmlFor = {'to'}
				inputIdName = {'to'}
				inputPlaceholder = {'Город прибытия'}
				destination = { destinationTo }
				valueInput = {this.state.valueTo}
				onClickChoiceSityHandler = {this.onClickChoiceToSityHandler}
				onChangeSearchHandler = {this.onChangeSearchToHandler}
			/>
		</div>
		<div className="booking-form__container">
				<label className="booking-form__label text text_regular" htmlFor="date">Когда</label>
				<Flatpickr 
					className='booking-form__input booking-form__input_calendar text text_regular'
					placeholder="дд.мм.гггг"
					options={{
						enableTime: false,
						dateFormat: 'd-m-Y',
						time_24hr: true,
						locale: 'ru',
						allowInput:true,
						minDate: "today" 
					}}
					onChange={date => { this.setState({date}) }}
			 />
		</div>
		<Passenger/>
		<p className="booking-form__container">
				<button className="booking-form__button button button_theme_red text text_regular">Найти билеты</button>
		</p>
	</form>
	)}
};

export default SearchTicket;


