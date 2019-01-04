
// import 'flatpickr/dist/themes/material_green.css'

import React, {Component} from 'react';
import Flatpickr from 'react-flatpickr';
import { Russian } from "flatpickr/dist/l10n/ru.js"
import {NavLink} from 'react-router-dom'
import Passenger from './Passengers/Passengers'
import SityChoice from './SityChoice/SityChoice';
import {connect} from 'react-redux'
import { dataWay, minusAdult, plusAdult, minusChild, plusChild } from '../../store/actions/searchTicket';

class SearchTicket extends Component {

state = {
	date: '',
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
			passengerAdult = {this.props.searchTicket.passengerAdult}
			passengerChild = {this.props.searchTicket.passengerChild}

			onClickMinusAdultHandler = {this.props.onMinusAdult}
			onClickPlusAdultHandler = {this.props.onPlusAdult}
			onClickMinusChildHandler = {this.props.onMinusChild}
			onClickPlusChildHandler = {this.props.onPlusChild}
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
		searchTicket: state.searchTicket,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDataWay: () => dispatch(dataWay()),
		onMinusAdult: (event) => dispatch(minusAdult(event)),
		onPlusAdult: (event) => dispatch(plusAdult(event)),
		onMinusChild: (event) => dispatch(minusChild(event)),
		onPlusChild: (event) => dispatch(plusChild(event))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTicket);



