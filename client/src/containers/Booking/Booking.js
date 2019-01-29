import React, {Component} from 'react';
import {connect} from 'react-redux'
import SearchTicket from '../../components/SearchTicket/SearchTicket';
import {NavLink} from 'react-router-dom';
import Footer from '../Footer/Footer'
import { DATA_WAY } from '../../store/actions/actionTypes';

class Booking extends Component {

	render() {

		const routes = this.props.ticket.routes;
		return (
			<div>
				<header className="main-header main-header_booking">
					<div className="main-header__top">
						<NavLink className="logo main-header__logo" to="/">
							<img className="logo__image" src="img/header-logo.png" alt='evrotrans'/>
						</NavLink>
					</div>
					<div className="promo main-header__promo main-header__promo--booking" > 
						{ this.props.ticket.length === 0 || this.props.ticket.routes.length === 0
							? <h1 className="main-header__title text text_regular">—</h1>
							: <h1 className="main-header__title text text_regular">{routes[0].from} — {routes[0].to}</h1>
						}
						<SearchTicket/>
					</div>
				</header>
				<main className="page__main">
					 <section className="tickets">
					 	{console.log(this.props.ticket)}
						{ this.props.ticket.length === 0 || routes.length === 0
							? <h2 className="tickets__title text text_regular">На данную дату билетов нет.</h2>
							: <React.Fragment>
									<h2 className="tickets__title text text_regular">Все рейсы</h2>
									<ul className="tickets__list">
										{routes.map((route, index) => {
											return (
												<li key={index} className="tickets__item ticket">
													<div className="ticket__content">
															<p className="ticket__time text text_regular">
																	<span className="ticket__wrapper">
																		<span className="ticket__departure">Время отправления</span>
																		<span className="ticket__time-from">{route.time_start}</span> 
																	</span>
																	<span className="ticket__date">{route.date}</span>
																	<span className="ticket__time-full">{route.time_in_route}</span>
																	<span className="ticket__wrapper">
																		<span className="ticket__arrival">Время прибытия</span>
																		<span className="ticket__time-to">{route.time_end}</span>
																	</span>
																	<span className="ticket__date">{route.date_end}</span>
															</p>
															<p className="ticket__routes text text_regular">
																<span className="ticket__station-from">{route.from}</span>
																<span className="ticket__station-from">{route.route[1].locality}</span>
															</p>
													</div>
													<div className="ticket__price">
															<p className="ticket__order text text_regular">{route.route[1].price_to.adult} р.</p>
															<input type="submit" className="ticket__link button button_theme_red text text_regular" value="Купить билет"/>
													</div>
												</li>
											)
										})}
									</ul>
								</React.Fragment>
						}

						{/* <? if(isset($message)): ?> */}
						{/*	<h2 className="tickets__title text text_regular"><?= $message ?></h2>
						<? else: ?>
							<h2 className="tickets__title text text_regular">Все рейсы</h2>
						<ul className="tickets__list">
							<?foreach ($arTikets->routes as $routes)
									{?>
									<form action="formation.php" method="POST">
											<li className="tickets__item ticket">
													<div className="ticket__content">
															<p className="ticket__time text text_regular">
																	<span className="ticket__wrapper">
																		<span className="ticket__departure">Время отправления</span>
																		<span className="ticket__time-from"><?= $routes->time_start ?></span>
																	</span>
																	
																		<span className="ticket__date"><?= $routes->date ?></span>
																	<span className="ticket__time-full"><?= $routes->time_in_route ?></span>
																	<span className="ticket__wrapper">
																		<span className="ticket__arrival">Время прибытия</span>
																		<span className="ticket__time-to"><?= $routes->time_end ?></span>

																	</span>
																	<span className="ticket__date"><?= $routes->date_end ?></span>
															</p>
															<p className="ticket__routes text text_regular">
																	<?foreach ($routes->route as $key => $point)
																	{
																			if ($key == 0):?>
																					<span className="ticket__station-from"><?= $routes->from  ?></span>
																			<?else:?>
																						<span className="ticket__station-from"><?= $point->locality?><!-- Время прибытия:-->
				<!--                                      --><?//echo date("H:i:s", strtotime($routes->time_start) + (strtotime($point->time_to_station) - strtotime("00:00:00"))) . "\n";?>
																						</span>
																			<?endif;?>
																	<?}?>
															</p>
													</div>
													<div className="ticket__price">
															<p className="ticket__order text text_regular">
																	<?$price = ($routes->route[0]->price_from->adult * $adult)+($routes->route[0]->price_from->children * $children);?>
																	<?=$price?> р.
															</p>
															<input type="hidden" name="id" value="<?= $routes->id ?>">
															<input type="hidden" name="adult" value="<?= $adult ?>">
															<input type="hidden" name="children" value="<?= $children ?>">
															<input type="hidden" name="fullprice" value="<?= $price ?>">
															<input type="hidden" name="to" value="<?= $routes->to ?>">
															<input type="hidden" name="from" value="<?= $routes->from ?>">
															<input type="submit" className="ticket__link button button_theme_red text text_regular" value="Купить билет">
															</input>
													</div>
											</li>
									</form>
								<?}?>
						</ul> */}
						{/* <? endif ?> */}
					</section>
				</main>
				<Footer/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		ticket: state.searchTicket.routes,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDataWay: () => dispatch(DATA_WAY()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);