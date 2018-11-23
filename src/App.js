import React, { Component } from 'react';
import MainPage from './containers/MainPage/MainPage';
import Booking from './containers/Booking/Booking';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';


class App extends Component {
  render() {

		// let routes = (

		// )

    return (
			<Switch>
				<Route path="/booking" component={Booking} />
				<Route path="/" exact component={MainPage} />
				<Redirect to="/" />
			</Switch>
    );
  }
}



export default withRouter(App);
