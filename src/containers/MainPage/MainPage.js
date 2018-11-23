import React, {Component} from 'react';
import SearchTicket from '../../components/SearchTicket/SearchTicket';
import axios from 'axios';
// import classes from './MainPage.scss';

class MainPage extends Component {

	state = {
		
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
			</div>
		);
	}
}

export default MainPage;