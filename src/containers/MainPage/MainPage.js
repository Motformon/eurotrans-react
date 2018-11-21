import React, {Component} from 'react';
import classes from './MainPage.scss';

class MainPage extends Component {
	render() {
		return (
			<div>
				<header className="main-header">
					<div className="main-header__top">
						<a className="logo main-header__logo" href="/">
							<img className="logo__image" alt=""  src="img/header-logo.png" />
						</a>
						<a className="contacts main-header__contacts" href="tel:8800121212">
							<span className="contacts__content text text_regular contacts__content_header">Звонок по России бесплатный</span>
							<span className="contacts__phone text text_semibold contacts__content_header">8-800-123-12-12</span>
						</a>
					</div>
						
						{/*
						<section className="promo main-header__promo">
								<h1 className="visually-hidden">Билеты на автобусы</h1>
								<h2 className="promo__title text text_extrabold">Дешевые билеты<span className="promo__full-stroke"> на автобус от перевозчика</span></h2>
								<form className="booking-form main-header__form" action="/projects/eurotrans-react/booking.php" id="main-header__form">
										<div className="booking-form__container" id="cityFromHeader">
												<label className="booking-form__label text text_regular" for="from">Откуда</label>
												<input className="booking-form__input booking-form__input_select" id="from" autocomplete="off" name="from" placeholder="Город отправления" required>
												<ul className="booking-form__cities-list">
												
																<li className="booking-form__option booking-form__option_cities text text_regular"></li>
											
												</ul>
										</div>
										<div className="booking-form__container" id="cityToHeader">
												<label className="booking-form__label text text_regular" for="to">Куда</label>
												<input className="booking-form__input booking-form__input_select" id="to" autocomplete="off" name="to" required placeholder="Город прибытия">
												<ul className="booking-form__cities-list">
													
																<li className="booking-form__option booking-form__option_cities text text_regular"></li>
													
												</ul>
										</div>
										<div className="booking-form__container">
												<label className="booking-form__label text text_regular" for="date">Когда</label>
												<input className="booking-form__input booking-form__input_calendar text text_regular" type="text" id="dateHeader" name="date" placeholder="дд.мм.гггг" autocomplete="off" required>
										</div>
										<div className="booking-form__container" id="passengerHeader">
												<label className="booking-form__label text text_regular" for="passengers">Пассажиры</label>
												<input className="booking-form__input booking-form__input_passengers text text_regular" type="text" id="passengers"  v-on:click="showPassengerList" autocomplete="off" required>
												<ul className="booking-form__cities-list booking-form__cities-list_passenger" v-if="isShowList">
														<li className="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
																<p className="booking-form__passenger text text_regular">Взрослые<span className="booking-form__container-passenger">
																					<button className="booking-form__count-passenger booking-form__count-passenger_minus"><span className="visually-hidden">Минус</span></button>
																		<input className="booking-form__counter text text_regular"  id="adult" name="adult" required autocomplete="off" value="0">
																		<button className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" ><span className="visually-hidden">Плюс</span></button></span>
																</p>
														</li>
														<li className="booking-form__option booking-form__option_passengers booking-form__option_passenger">
																<p className="booking-form__passenger text text_regular">Дети<span className="booking-form__container-passenger">
																					<button className="booking-form__count-passenger booking-form__count-passenger_minus"><span className="visually-hidden">Минус</span></button>
																		<input className="booking-form__counter text text_regular"  name="children" required autocomplete="off" value="0">
																		<button className="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"><span className="visually-hidden">Плюс</span></button></span>
																</p>
														</li>
												</ul>
										</div>
										<p className="booking-form__container">
												<button className="booking-form__button button button_theme_red text text_regular">Найти билеты</button>
										</p>
								</form>
						</section> */}
				</header>
			</div>
		);
	}
}

export default MainPage;