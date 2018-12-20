import React, {Component} from 'react';

class Passangers extends Component {

	state = {
		passangersShow: false,
	}

render() {

	return (
		<div className="booking-form__container" id="passengerHeader">
			<label className="booking-form__label text text_regular" htmlFor="passengers">Пассажиры</label>
			<input className="booking-form__input booking-form__input_passengers text text_regular" type="text" id="passengers"  autoComplete="off" required/>
			
			{ 
				this.state.listShowCity 
				? <ul className="booking-form__cities-list booking-form__cities-list_passenger">
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
				: null 
			}
			

	</div>
	)}
};

export default Passangers;


