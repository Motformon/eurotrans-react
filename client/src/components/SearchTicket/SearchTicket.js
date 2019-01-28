
// import 'flatpickr/dist/themes/material_green.css'

import React, {Component} from 'react';
import Flatpickr from 'react-flatpickr';
import { Russian } from "flatpickr/dist/l10n/ru.js";
import {NavLink} from 'react-router-dom';
import Passenger from './Passengers/Passengers';
import SityChoice from './SityChoice/SityChoice';
import {connect} from 'react-redux'
import axios from 'axios';
import { dataWay, minusAdult, plusAdult, minusChild, plusChild, ChoiceFromSity, ChoiceToSity, SearchFromSity, SearchToSity, dateTicket } from '../../store/actions/searchTicket';

class SearchTicket extends Component {

	state = {
		destinationFrom: [],
		destinationTo: []
	}

  async componentDidMount() {
    try {
			const response = await axios.get(`https://erp.evrotrans.net/search_reis_v2.php?target=1`);
			const response2 = await axios.get(`https://erp.evrotrans.net/search_reis_v2.php?target=2`);
			
			
			const destinationFrom = response.data.destination;
			const destinationTo = response2.data.destination;
			

      this.setState({
				destinationFrom,
				destinationTo
			})
			
    } catch (e) {
      console.log(e)
    }
	}


render() {
	

	const { date } = this.props.searchTicket;

                 
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
				destination = { filterCity(this.state.destinationFrom,this.props.searchTicket.valueFrom, 20) }
				valueInput = {this.props.searchTicket.valueFrom}
				onClickChoiceSityHandler = {this.props.onChoiceFromSity}
				onChangeSearchHandler = {this.props.onSearchFromSity}
			/>
	
		</div>
		<div className="booking-form__container" id="cityToHeader">

		<SityChoice
				labelText = {'Куда'}
				labelHtmlFor = {'to'}
				inputIdName = {'to'}
				inputPlaceholder = {'Город прибытия'}
				destination = { filterCity(this.state.destinationTo,this.props.searchTicket.valueTo, 20) }
				valueInput = {this.props.searchTicket.valueTo}
				onClickChoiceSityHandler = {this.props.onChoiceToSity}
				onChangeSearchHandler = {this.props.onSearchToSity}
			/>
		</div>
		<div className="booking-form__container">
				<label className="booking-form__label text text_regular" htmlFor="date">Когда</label>
				<Flatpickr 
					required
					className='booking-form__input booking-form__input_calendar text text_regular'
					value={this.props.searchTicket.date}
					placeholder="дд.мм.гггг"
					options={{
						enableTime: false,
						dateFormat: 'd-m-Y',
						time_24hr: true,
						locale: Russian,
						allowInput:true,
						minDate: "today" 
					}}
					onChange={date => this.props.onDateTicket(date)}
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

			{	this.props.searchTicket.valueFrom !== '' && this.props.searchTicket.valueTo !== '' && this.props.searchTicket.date !== ''
			? <NavLink
					to="/booking"
					className="booking-form__button button button_theme_red text text_regular"
					onClick = {() => this.props.onDataWay(
						this.props.searchTicket.date[0],
						this.props.searchTicket.valueFrom,
						this.props.searchTicket.valueTo
					)}
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
		onDataWay: (dateSearchData, placeStart, placeEnd) => dispatch(dataWay(dateSearchData, placeStart, placeEnd)),
		onMinusAdult: (event) => dispatch(minusAdult(event)),
		onPlusAdult: (event) => dispatch(plusAdult(event)),
		onMinusChild: (event) => dispatch(minusChild(event)),
		onPlusChild: (event) => dispatch(plusChild(event)),
		onChoiceFromSity: (event) => dispatch(ChoiceFromSity(event)),
		onChoiceToSity: (event) => dispatch(ChoiceToSity(event)),
		onSearchFromSity: (event) => dispatch(SearchFromSity(event)),
		onSearchToSity: (event) => dispatch(SearchToSity(event)),
		onDateTicket: (date) => dispatch(dateTicket(date)),
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTicket);



