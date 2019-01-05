import React, {Component} from 'react';
import {connect} from 'react-redux'
import SearchTicket from '../../components/SearchTicket/SearchTicket';
import {NavLink} from 'react-router-dom';
import Footer from '../Footer/Footer'
import { DATA_WAY } from '../../store/actions/actionTypes';
import moment from 'moment'
import axios from 'axios';
class Booking extends Component {
	state = {
		routes: []
	}

	async componentDidMount() {
		try {
			const dateSearch = moment(this.props.searchTicket.date[0]).format('L');
			
			const placeStart = this.props.searchTicket.valueFrom;
			const placeEnd = this.props.searchTicket.valueTo;
			console.log(dateSearch, placeStart, placeEnd);

			const config = {
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
				
			}

			const response = await axios.get(`https://erp.evrotrans.net/search_reis.php?date_search=01/05/2019&place_start=%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D1%8B%D0%B9&place_end=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6`, config)
		

	
			// const routes = response.data.destination;
				
			// this.setState({
			// 	routes
			// })
			
		} catch (e) {
			console.log(e)
		}
	}

	render() {



		return (
			<div>
				<header className="main-header main-header_booking">
					<div className="main-header__top">
						<NavLink className="logo main-header__logo" to="/">
							<img className="logo__image" src="img/header-logo.png" alt='evrotrans'/>
						</NavLink>
					</div>
					<div className="promo main-header__promo main-header__promo--booking" > 
						<h1 className="main-header__title text text_regular">{/* <?= $fromCity ?> — <?= $toCity ?> */}</h1>
						<SearchTicket/>
					</div>
				</header>
				<main className="page__main">
					 <section className="tickets">
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
		searchTicket: state.searchTicket,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDataWay: () => dispatch(DATA_WAY()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);