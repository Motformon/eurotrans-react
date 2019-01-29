import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { dataWay} from '../../store/actions/searchTicket';
class RoutesMainPage extends Component {

render() {
	return (
		<React.Fragment>
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
									<p className="route__price text text_semibold">От 2260р.</p>
									<NavLink
										to="/booking"
										className="route__booking button button_theme_blue text text_semibold"
										onClick = {() => this.props.onDataWay(
											new Date(),
											"Ставрополь",
											"Москва"
										)}
									>
										Забронировать
									</NavLink>
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
									<p className="route__price text text_semibold">От 2260р.</p>
									<NavLink
										to="/booking"
										className="route__booking button button_theme_blue text text_semibold"
										onClick = {() => this.props.onDataWay(
											new Date(),
											"Буденновск",
											"Москва"
										)}
									>
										Забронировать
									</NavLink>
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
									<p className="route__price text text_semibold">От 2260р.</p>
									<NavLink
										to="/booking"
										className="route__booking button button_theme_blue text text_semibold"
										onClick = {() => this.props.onDataWay(
											new Date(),
											"Левокумское",
											"Москва"
										)}
									>
										Забронировать
									</NavLink>
							</article>
					</li>
			</ul>
		</React.Fragment>
	)};
}

function mapStateToProps(state) {
	return {
		searchTicket: state.searchTicket,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDataWay: (dateSearchData, placeStart, placeEnd) => dispatch(dataWay(dateSearchData, placeStart, placeEnd)),
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesMainPage);
