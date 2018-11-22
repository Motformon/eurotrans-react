import React  from "react";
import Input from "../UI/Input/Input";

const SearchTicket = (props) => (
	<form className="booking-form main-header__form" action="/projects/eurotrans-react/booking.php" id="main-header__form">
		<div className="booking-form__container" id="cityFromHeader">
			<Input
				label={'Откуда'}
				classLabel={'booking-form__label text text_regular'}
				placeholder={"Город отправления"}
				classInput={"booking-form__input booking-form__input_select"}
			/>
			<ul className="booking-form__cities-list">
			
							<li className="booking-form__option booking-form__option_cities text text_regular"></li>
		
			</ul>
		</div>
		<div className="booking-form__container" id="cityToHeader">
			<Input
				label={'Куда'}
				classLabel={'booking-form__label text text_regular'}
				placeholder={"Город прибытия"}
				classInput={"booking-form__input booking-form__input_select"}
			/>
			<ul className="booking-form__cities-list">
				
							<li className="booking-form__option booking-form__option_cities text text_regular"></li>
				
			</ul>
		</div>
		<div className="booking-form__container">
				<label className="booking-form__label text text_regular" for="date">Когда</label>
				<input className="booking-form__input booking-form__input_calendar text text_regular" type="text" id="dateHeader" name="date" placeholder="дд.мм.гггг" autocomplete="off" required/>
		</div>
		<div className="booking-form__container" id="passengerHeader">
			<label className="booking-form__label text text_regular" for="passengers">Пассажиры</label>
			<input className="booking-form__input booking-form__input_passengers text text_regular" type="text" id="passengers"  autocomplete="off" required/>
			<ul className="booking-form__cities-list booking-form__cities-list_passenger">
					<li className="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
							<p className="booking-form__passenger text text_regular">Взрослые<span className="booking-form__container-passenger">
									<button className="booking-form__count-passenger booking-form__count-passenger_minus">
										<span className="visually-hidden">Минус</span>
									</button>
									<input className="booking-form__counter text text_regular"  id="adult" name="adult" required autocomplete="off" value="0"/>
									<button className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" ><span className="visually-hidden">Плюс</span></button></span>
							</p>
					</li>
					<li className="booking-form__option booking-form__option_passengers booking-form__option_passenger">
							<p className="booking-form__passenger text text_regular">Дети<span className="booking-form__container-passenger">
									<button className="booking-form__count-passenger booking-form__count-passenger_minus"><span className="visually-hidden">Минус</span></button>
									<input className="booking-form__counter text text_regular"  name="children" required autocomplete="off" value="0"/>
									<button className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"><span className="visually-hidden">Плюс</span></button></span>
							</p>
					</li>
			</ul>
		</div>
		<p className="booking-form__container">
				<button className="booking-form__button button button_theme_red text text_regular">Найти билеты</button>
		</p>
	</form>
);

export default SearchTicket;