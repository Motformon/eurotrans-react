import React, {Component} from 'react';
import SearchTicket from '../../components/SearchTicket/SearchTicket';
import axios from 'axios';
// import classes from './MainPage.scss';

class MainPage extends Component {

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
					<section className="promo main-header__promo">
						<h1 className="visually-hidden">Билеты на автобусы</h1>
						<h2 className="promo__title text text_extrabold">Дешевые билеты<span className="promo__full-stroke"> на автобус от перевозчика</span></h2>
						<SearchTicket
							destinationFrom = {this.state.destinationFrom}
							destinationTo = {this.state.destinationTo}
						/>
					</section>
				
				</header>
				<main className="page__main">
					<section className="routes page__routes">
							<h1 className="routes__title text text_semibold">Популярные направления</h1>
							<ul className="routes__list">
									<li className="routes__item">
											<article className="route routes__article" style={{backgroundImage: 'url("../img/routes-bg.jpg")'}}>
													<h2 className="route__title text text_semibold">Ставрополь - Москва</h2>
													<p className="route__sending text text_regular">Отправление</p>
													<ul className="route__list">
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">09:00</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">12:30</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">17:00</span></li>
													</ul>
													<p className="route__price text text_semibold">От 2260р.</p><a className="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
											</article>
									</li>
									<li className="routes__item">
											<article className="route routes__article" style={{backgroundImage: 'url("../img/stavropol.jpg")'}}>
													<h2 className="route__title text text_semibold">Москва - Ставрополь</h2>
													<p className="route__sending text text_regular">Отправление</p>
													<ul className="route__list">
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">09:00</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">13:30</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">20:00</span></li>
													</ul>
													<p className="route__price text text_semibold">От 2260р.</p><a className="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
											</article>
									</li>
									<li className="routes__item">
											<article className="route routes__article" style={{backgroundImage: 'url("../img/routes-bg.jpg")'}}>
													<h2 className="route__title text text_semibold">Нефтекумск - Москва</h2>
													<p className="route__sending text text_regular">Отправление</p>
													<ul className="route__list">
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">09:00</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">16:30</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">18:00</span></li>
													</ul>
													<p className="route__price text text_semibold">От 2260р.</p><a className="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
											</article>
									</li>
									<li className="routes__item">
											<article className="route routes__article" style={{backgroundImage: 'url("../img/Neftekumsk.jpg")'}}>
													<h2 className="route__title text text_semibold">Москва - Нефтекумск</h2>
													<p className="route__sending text text_regular">Отправление</p>
													<ul className="route__list">
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">09:00</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">12:30</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">17:00</span></li>
													</ul>
													<p className="route__price text text_semibold">От 2260р.</p><a className="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
											</article>
									</li>
									<li className="routes__item">
											<article className="route routes__article" style={{backgroundImage: 'url("../img/Budenovsk.jpg")'}}>
													<h2 className="route__title text text_semibold">Будденовск - Москва</h2>
													<p className="route__sending text text_regular">Отправление</p>
													<ul className="route__list">
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">09:00</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">13:30</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">20:00</span></li>
													</ul>
													<p className="route__price text text_semibold">От 2260р.</p><a className="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
											</article>
									</li>
									<li className="routes__item">
											<article className="route routes__article" style={{backgroundImage: 'url("../img/Levokum.jpg")'}}>
													<h2 className="route__title text text_semibold">Левокумское - Москва</h2>
													<p className="route__sending text text_regular">Отправление</p>
													<ul className="route__list">
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">09:00</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">16:30</span></li>
															<li className="route__item text text_regular"><span className="route__date">08.06 |</span><span className="route__time">18:00</span></li>
													</ul>
													<p className="route__price text text_semibold">От 2260р.</p><a className="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
											</article>
									</li>
							</ul>
					</section>
					<section className="advantage page__advantage">
						<h1 className="advantage__title text text_semibold">Преимущество бронирования у нас</h1>
							<div className="swiper-container">
									<div className="swiper-wrapper advantage__list">
										<div className="swiper-slide">
											<div className="advantage__item advantage__item_driver">
													<p className="advantage__subtitle text text_semibold">Опытные водители</p>
													<p className="advantage__content text text_regular">Вас будет перевозить водитель со стажем пассажирских перевозок не менее 10 лет.</p>
											</div>
										</div>								
										<div className="swiper-slide">
											<div className="advantage__item advantage__item_safety">
													<p className="advantage__subtitle text text_semibold">Безопасные поездки</p>
													<p className="advantage__content text text_regular">Наши автобусы проходят технический осмотр, а водители медицинскую проверку перед каждой поездкой. На случай непредвиденных ситуаций у нас всегда есть дежурный водитель и резервный автобус.</p>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="advantage__item advantage__item_station">
													<p className="advantage__subtitle text text_semibold">Остановки каждые 4 часа для обеда и отдыха</p>
													<p className="advantage__content text text_regular">Ваш маршрут предусматривает необходимые остановки в местах, где можно можно легко перекусить или плотно пообедать домашней едой, а также пройтись и размяться.</p>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="advantage__item advantage__item_card-payment">
													<p className="advantage__subtitle text text_semibold">Безопасная олата картой</p>
													<p className="advantage__content text text_regular">Мы работаем только с надежными системами приема платежей, которые шифруют данные и регулярно проходят проверку безопасности по стандартам Visa и Mastercard.</p>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="advantage__item advantage__item_insurance">
												<p className="advantage__subtitle text text_semibold">Все пассажиры застрахованны</p>
												<p className="advantage__content text text_regular">В стоимость билета включено страхование.</p>
											</div>
										</div>
								</div>

								<div className="swiper-pagination"></div>
						</div>
        </section>
				<section className="feedback page__feedback">
            <div className="feedback__wrapper">
                <div className="feedback__container">
										<h1 className="feedback__title text text_semibold">Контолируем качество перевозок</h1>
										<img src="img/gen-dir.jpg" className='feedback__img-dir' alt=""/>
                    <p className="feedback__content text text_regular">
												Максим Яцунов, заместитель генерального директора.
												<span className='feedback__content--quote'> Помогите нам стать лучше. Если у вас есть пожелания, рекомендации или претензии относительно оказанных услуг, пожалуйста, направьте их лично мне</span>
											
										</p>
								</div>
								<a className="button button_theme_red text text_regular feedback__link--write">Написать руководителю</a>
								<input type="hidden" className='feedback__link '/>
            </div>
        </section>
				<section className="buses page__buses">
            <header className="buses__header">
                <h2 className="buses__title text text_semibold">Комфортабельные автобусы</h2>
                <p className="buses__header-description text text_regular">все для удобства вашей поездки</p>
						</header>
								 <div className="swiper-container">
									<div className="swiper-wrapper buses__list">
										<div className="swiper-slide">
											<div className="buses__item">
												<picture className="buses__picture">
														<source type="image/webp" srcset="img/mercedes-mobile.webp"/>
														<img className="buses__image" src="img/mercedes-mobile.jpg" alt="Mercedes Sprinter"/>
												</picture>
												<div className="buses__container">
														<p className="buses__model text text_semibold">Mercedes Sprinter
																<ul className="buses__features-list">
																		<li className="buses__features-item text text_regular">Комфортные сидения</li>
																		<li className="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li className="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
									    <div className="buses__item">
												<picture className="buses__picture">
														<source type="image/webp" srcset="img/hyundai-mobile.webp"/>
														<img className="buses__image" src="img/hyundai-mobile.jpg" alt="Hyundai"/>
												</picture>
												<div className="buses__container">
														<p className="buses__model text text_semibold">Hyundai
																<ul className="buses__features-list">
																		<li className="buses__features-item text text_regular">Комфортные сидения</li>
																		<li className="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li className="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																		<li className="buses__features-item text text_regular">Микрофон для громкой связи с пассажирами</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="buses__item">
												<picture className="buses__picture">
														<source type="image/webp" srcset="img/1-stage-mobile.webp"/>
														<img className="buses__image" src="img/1-stage-mobile.jpg" alt="1,5 этажные автобусы"/>
												</picture>
												<div className="buses__container">
														<p className="buses__model text text_semibold">1,5 этажные автобусы
																<ul className="buses__features-list">
																		<li className="buses__features-item text text_regular">Комфортные сидения</li>
																		<li className="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li className="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																		<li className="buses__features-item text text_regular">Микрофон для громкой связи с пассажирами</li>
																		<li className="buses__features-item text text_regular">Туалет</li>
																		<li className="buses__features-item text text_regular">Мини-кухня</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="buses__item">
												<picture className="buses__picture">
														<source type="image/webp" srcset="img/2-stage-mobile.webp"/>
														<img className="buses__image" src="img/2-stage-mobile.jpg" alt="2 этажные автобусы"/>
												</picture>
												<div className="buses__container">
														<p className="buses__model text text_semibold">2 этажные автобусы
																<ul className="buses__features-list">
																		<li className="buses__features-item text text_regular">Комфортные сидения</li>
																		<li className="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li className="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																		<li className="buses__features-item text text_regular">Микрофон для громкой связи с пассажирами</li>
																		<li className="buses__features-item text text_regular">Туалет</li>
																		<li className="buses__features-item text text_regular">Мини-кухня</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
								</div>
								
								<div className="swiper-pagination"></div>
					
						</div>
          

        </section>
				<section className="features page__features">
						<h2 className="features__title text text_semibold">Исправные и чистые автобусы</h2>
							<div className="swiper-container">
								<div className="swiper-wrapper ready__items">
									<div className="swiper-slide">
										<div className="ready__item">
											<img src="img/features-1.jpg" alt="EuroTrans" className="ready__item-img"/>
											<h3 className="ready__item-title">Отправляем автобусы на ТО перед каждой поездкой.</h3>
											<p className="ready__item-text">Проверяем транспорт на собственной станции техосмотра. В случае выявления неисправности, на рейс выходит резервный автобус.</p>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="ready__item">
											<img src="img/features-2.jpg" alt="EuroTrans" className="ready__item-img"/>
											<h3 className="ready__item-title">Проводим медосмотр водителей перед рейсом. </h3>
											<p className="ready__item-text">Если наш мед.персонал выявляет отклонения от нормы в самочувствии водителя, его заменяет коллега.</p>
										</div>
									</div>
									<div className="swiper-slide">

									
										<div className="ready__item">
											<img src="img/features-3.jpg" alt="EuroTrans" className="ready__item-img"/>
											<h3 className="ready__item-title">Выводим транспорт на маршрут только после тщательной уборки. </h3>
											<p className="ready__item-text">Моем и пылесосим автобусы до и после рейсов.</p>
										</div>
									</div>
								</div>
								<div className="swiper-pagination"></div>
						</div>


        </section>
				<section className="booking page__booking">
            <header className="booking__header">
                <h2 className="booking__title text text_semibold">Забронируй и оплатите билет сейчас</h2>
            </header>
						<section className="booking__container">
							<SearchTicket
								destinationFrom = {this.state.destinationFrom}
								destinationTo = {this.state.destinationTo}
							/>
						</section>
				</section>
				</main>
				<footer className="main-footer page__main-footer">
					<section className="main-footer__top">
							<h2 className="visually-hidden">Верхняя секция основного подвала страницы</h2>
							<a className="logo main-footer__logo" href="/">
								<img className="logo__image" src="img/logo.png"/>
							</a>
							<section className="additional-menu main-footer__company">
									<h3 className="additional-menu__title text text_semibold">O компании</h3>
									<ul className="additional-menu__list">
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">О нас</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Договор оферты</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Политика конфиденциальности</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Контакты</a></li>
									</ul>
							</section>
							<section className="additional-menu main-footer__company">
									<h3 className="additional-menu__title text text_semibold">Пользователям</h3>
									<ul className="additional-menu__list">
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Вопросы и ответы</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Купить билеты</a></li>
									</ul>
							</section><a className="contacts contacts_footer main-footer__contacts" href="tel:8800121212"><span className="contacts__content text text_regular">Наш номер телефона</span><span className="contacts__phone text text_semibold">8-800-123-12-12</span></a>
					</section>
					<section className="main-footer__copyright">
							<h2 className="visually-hidden">Секция с копирайтами</h2>
					</section>
				</footer>
			</div>
		);
	}
}

export default MainPage;