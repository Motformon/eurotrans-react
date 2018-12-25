
// import 'flatpickr/dist/themes/material_green.css'

import React, {Component} from 'react';
import Flatpickr from 'react-flatpickr';
import { Russian } from "flatpickr/dist/l10n/ru.js"
import {NavLink} from 'react-router-dom'
import Passenger from './Passengers/Passengers'
import SityChoice from './SityChoice/SityChoice';
import {connect} from 'react-redux'
import { dataWay } from '../../store/actions/actions';

class SearchTicket extends Component {

state = {
	passengerAdult: 1,
	passengerChild: 0,
	date: '',
	valueFrom: '',
	valueTo: '',
}

onClickMinusAdultHandler = (event) => {
	event.preventDefault();
	let passengerResult = this.state.passengerAdult - 1;

	if(passengerResult < 1) {
		passengerResult = 1;
	}

	this.setState({
		passengerAdult: passengerResult,
	})
}

onClickPlusAdultHandler = (event) => {
	event.preventDefault();
	let passengerResult = this.state.passengerAdult + 1;
	
	this.setState({
		passengerAdult: passengerResult,
	})
}
onClickMinusChildHandler = (event) => {
	event.preventDefault();
	let passengerResult = this.state.passengerChild - 1;

	if(passengerResult < 0) {
		passengerResult = 0;
	}

	this.setState({
		passengerChild: passengerResult,
	})
}

onClickPlusChildHandler = (event) => {
	event.preventDefault();
	let passengerResult = this.state.passengerChild + 1;
	
	this.setState({
		passengerChild: passengerResult,
	})
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


onChangeSearchFromHandler = (event) => {
	const value = event.target.value;

	this.setState({
		valueFrom: value,
	})
}

onChangeSearchToHandler = (event) => {
	const value = event.target.value;

	this.setState({
		valueTo: value,
	})
}


render() {
	console.log(this.props)
	

	const { date } = this.state;

	const destinationFrom = this.props.destinationFrom;
	const destinationTo = this.props.destinationTo;                       


	function filterCity(destination ,searchText, maxResults) {
		return destination
			.filter(city => {
				if (city.name.toLowerCase().includes(searchText.toLowerCase())) {
					return true;
				}
				return false;
			})
			.slice(0, maxResults);
	}

	return (
	<form className="booking-form main-header__form" action="/projects/eurotrans-react/booking.php" id="main-header__form">
		<div className="booking-form__container" id="cityFromHeader">

			<SityChoice
				labelText = {'Откуда'}
				labelHtmlFor = {'from'}
				inputIdName = {'from'}
				inputPlaceholder = {'Город отправления'}
				destination = { filterCity(destinationFrom,this.state.valueFrom, 20) }
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
				destination = { filterCity(destinationTo,this.state.valueTo, 20) }
				valueInput = {this.state.valueTo}
				onClickChoiceSityHandler = {this.onClickChoiceToSityHandler}
				onChangeSearchHandler = {this.onChangeSearchToHandler}
			/>
		</div>
		<div className="booking-form__container">
				<label className="booking-form__label text text_regular" htmlFor="date">Когда</label>
				<Flatpickr 
					required
					className='booking-form__input booking-form__input_calendar text text_regular'
					placeholder="дд.мм.гггг"
					options={{
						enableTime: false,
						dateFormat: 'd-m-Y',
						time_24hr: true,
						locale: Russian,
						allowInput:true,
						minDate: "today" 
					}}
					onChange={date => { this.setState({date}) }}
			 />
		</div>
		<Passenger
			passengerAdult = {this.state.passengerAdult}
			passengerChild = {this.state.passengerChild}
			onClickMinusAdultHandler = {this.onClickMinusAdultHandler}
			onClickPlusAdultHandler = {this.onClickPlusAdultHandler}
			onClickMinusChildHandler = {this.onClickMinusChildHandler}
			onClickPlusChildHandler = {this.onClickPlusChildHandler}
		/>
		<p className="booking-form__container">

			{	this.state.valueFrom !== '' && this.state.valueTo !== '' && this.state.date !== ''
			? <NavLink
					to="/booking"
					className="booking-form__button button button_theme_red text text_regular"
					onClick = {this.props.onDataWay}
				>
					Найти билеты
				</NavLink>
			: <button 
					className="booking-form__button button button_theme_red text text_regular"					
				>
				Найти билеты</button>
			}
		




		</p>
	</form>
	)}
};

 
function mapStateToProps(state) {
	return {
		booking: state.booking,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDataWay: () => dispatch(dataWay())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTicket);



