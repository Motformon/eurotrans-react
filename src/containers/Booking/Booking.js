import React, {Component} from 'react';
import SearchTicket from '../../components/SearchTicket/SearchTicket';
import classes from './Booking.scss';
import axios from 'axios';
class Booking extends Component {

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
				<header className="main-header main-header_booking">
					<div className="main-header__top">
						<a className="logo main-header__logo" href="/">
							<img className="logo__image" src="img/header-logo.png"/>
						</a>
					</div>
					<div className="main-header__booking-form"> 
						<h1 className="main-header__title text text_regular">{/* <?= $fromCity ?> — <?= $toCity ?> */}</h1>
						<SearchTicket
							destinationFrom = {this.state.destinationFrom}
							destinationTo = {this.state.destinationTo}
						/>
					</div>
				</header>
				<main className="page__main">
					<section className="tickets">
						{/* <? if(isset($message)): ?> */}
							<h2 className="tickets__title text text_regular">
							{/* <?= $message ?> */}
							</h2>
						{/* <? else: ?> */}
							<h2 className="tickets__title text text_regular">Все рейсы</h2>
						<ul className="tickets__list">
							{/* <?foreach ($arTikets->routes as $routes) */}
									{/* {?> */}
									<form action="formation.php" method="POST">
											<li className="tickets__item ticket">
													<div className="ticket__content">
															<p className="ticket__time text text_regular">
																	<span className="ticket__wrapper">
																		<span className="ticket__departure">Время отправления</span>
																		<span className="ticket__time-from">
																		{/* <?= $routes->time_start ?> */}
																		</span>
																	</span>
																	
																		<span className="ticket__date">
																		{/* <?= $routes->date ?> */}
																		</span>
																	<span className="ticket__time-full">
																	{/* <?= $routes->time_in_route ?> */}
																	</span>
																	<span className="ticket__wrapper">
																		<span className="ticket__arrival">Время прибытия</span>
																		<span className="ticket__time-to">
																		{/* <?= $routes->time_end ?> */}
																		</span>

																	</span>
																	<span className="ticket__date">
																	{/* <?= $routes->date_end ?> */}
																	</span>
															</p>
															<p className="ticket__routes text text_regular">
																	{/* <?foreach ($routes->route as $key => $point)
																	{
																			if ($key == 0):?> */}
																					<span className="ticket__station-from">
																					{/* <?= $routes->from  ?> */}
																					</span>
																			{/* <?else:?> */}
																						<span className="ticket__station-from">
																						{/* <?= $point->locality?><!-- Время прибытия:-->
				<!--                                      --><?//echo date("H:i:s", strtotime($routes->time_start) + (strtotime($point->time_to_station) - strtotime("00:00:00"))) . "\n";?> */}
																						</span>
																			{/* <?endif;?>
																	<?}?> */}
															</p>
													</div>
													<div className="ticket__price">
															<p className="ticket__order text text_regular">
																	{/* <?$price = ($routes->route[0]->price_from->adult * $adult)+($routes->route[0]->price_from->children * $children);?>
																	<?=$price?> р. */}
															</p>
															<input type="hidden" name="id" value="<?= $routes->id ?>"/>
															<input type="hidden" name="adult" value="<?= $adult ?>"/>
															<input type="hidden" name="children" value="<?= $children ?>"/>
															<input type="hidden" name="fullprice" value="<?= $price ?>"/>
															<input type="hidden" name="to" value="<?= $routes->to ?>"/>
															<input type="hidden" name="from" value="<?= $routes->from ?>"/>
															<input type="submit" className="ticket__link button button_theme_red text text_regular" value="Купить билет"/>
													
													</div>
											</li>
									</form>
								{/* <?}?> */}
						</ul>
						{/* <? endif ?> */}
					</section>
				</main>
				<footer className="main-footer page__main-footer footer">
					<section className="main-footer__top">
							<h2 className="visually-hidden">Верхняя секция основного подвала страницы</h2>
							<a className="logo main-footer__logo" href="/">
								<img className="logo__image" src="/img/header-logo.png"/>
							</a>
							<section className="additional-menu main-footer__company">
									<h3 className="additional-menu__title text text_semibold">O компании</h3>
									<ul className="additional-menu__list">
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="/about/about.php">О нас</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" target="_blank" href="/upload/offer.pdf">Договор оферты</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" target="_blank" href="/upload/privacy policy.pdf">Политика конфиденциальности</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="/about/contacts.php">Контакты</a></li>
									</ul>
							</section>
							<section className="additional-menu main-footer__company">
									<h3 className="additional-menu__title text text_semibold">Пользователям</h3>
									<ul className="additional-menu__list">
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" target="_blank" href="/upload/requisites.pdf">Реквизиты компании</a></li>
											<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="/about/price.php">Прайс</a></li>
									 {/* <li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Купить билеты</a></li>  */}
									</ul>
							</section><a className="contacts contacts_footer main-footer__contacts" href="tel:88007002099"><span className="contacts__content text text_regular">Наш номер телефона</span><span className="contacts__phone text text_semibold">8-800-700-20-99</span></a>
					</section>
					<section className="main-footer__copyright">
							<p className="main-footer__copy text text_regular">ИП Яцунов С.П.</p><a className="main-footer__copy-link text text_regular" href="#"></a>
							<a href="https://webcosmos.ru/" className="main-footer__webcosmos-link">
								<img src="/img/logo-webcosmos.png" alt="" className="main-footer__webcosmos-img"/>
							</a>
					</section>
			</footer>
			</div>
		);
	}
}

export default Booking;