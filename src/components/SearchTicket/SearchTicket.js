import React, {Component} from 'react';
import Input from "../UI/Input/Input";
import flatpickr from "flatpickr";

flatpickr('#dateHeader', {
	enableTime: false,
	dateFormat: 'd-m-Y',
	time_24hr: true,
	locale: 'ru'
});

	


class SearchTicket extends Component {

	state = {
		listShowCity: false,
	}

	onFocusListShowHandler = () => {
		this.setState({
			listShowCity: true,
		})
	}

	
render() {

	const destinationFrom = this.props.destinationFrom;
	const destinationTo = this.props.destinationTo;                       

	const destinationFromList = destinationFrom.map((elem, index) => 
			<li 
				key={ index.toString() } 
				className="booking-form__option booking-form__option_cities text text_regular"
			>
				{elem.name}
			</li>
	); 

	const destinationToList = destinationTo.map((elem, index) => 
			<li 
				key={ index.toString() } 
				className="booking-form__option booking-form__option_cities text text_regular"
			>
				{elem.name}
			</li>
	); 

	return (
	<form className="booking-form main-header__form" action="/projects/eurotrans-react/booking.php" id="main-header__form">
		<div className="booking-form__container" id="cityFromHeader">
			<Input
				onFocusListShowHandler = {this.onFocusListShowHandler}
				label={'Откуда'}
				classLabel={'booking-form__label text text_regular'}
				placeholder={"Город отправления"}
				classInput={"booking-form__input booking-form__input_select"}
			/>


			{ 
				this.state.listShowCity 
				 ? 	<ul className="booking-form__cities-list">
							{ destinationFromList }
						</ul>
				 : null 
			}
	
		</div>
		<div className="booking-form__container" id="cityToHeader">
			<Input
				label={'Куда'}
				classLabel={'booking-form__label text text_regular'}
				placeholder={"Город прибытия"}
				classInput={"booking-form__input booking-form__input_select"}
			/>
			<ul className="booking-form__cities-list">
				
			{ destinationToList }
				
			</ul>
		</div>
		<div className="booking-form__container">
				<label className="booking-form__label text text_regular" htmlFor="date">Когда</label>
				<input className="booking-form__input booking-form__input_calendar text text_regular" type="text" id="dateHeader" name="date" placeholder="дд.мм.гггг" autoComplete="off" required/>
		</div>
		<div className="booking-form__container" id="passengerHeader">
			<label className="booking-form__label text text_regular" htmlFor="passengers">Пассажиры</label>
			<input className="booking-form__input booking-form__input_passengers text text_regular" type="text" id="passengers"  autoComplete="off" required/>
			<ul className="booking-form__cities-list booking-form__cities-list_passenger">
					<li className="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
							<p className="booking-form__passenger text text_regular">Взрослые
								<span className="booking-form__container-passenger">
									<button className="booking-form__count-passenger booking-form__count-passenger_minus">
										<span className="visually-hidden">Минус</span>
									</button>
									<input className="booking-form__counter text text_regular"  id="adult" name="adult" required autoComplete="off" value="0"/>
									<button className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" >
										<span className="visually-hidden">Плюс</span>
										</button>
								</span>
							</p>
					</li>
					<li className="booking-form__option booking-form__option_passengers booking-form__option_passenger">
							<p className="booking-form__passenger text text_regular">Дети<span className="booking-form__container-passenger">
									<button className="booking-form__count-passenger booking-form__count-passenger_minus"><span className="visually-hidden">Минус</span></button>
									<input className="booking-form__counter text text_regular"  name="children" required autoComplete="off" value="0"/>
									<button className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"><span className="visually-hidden">Плюс</span></button></span>
							</p>
					</li>
			</ul>
		</div>
		<p className="booking-form__container">
				<button className="booking-form__button button button_theme_red text text_regular">Найти билеты</button>
		</p>
	</form>
	)}
};

export default SearchTicket;


