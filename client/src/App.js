import React, { Component } from 'react';
import MainPage from './containers/MainPage/MainPage';
import Booking from './containers/Booking/Booking';
import Contact from './containers/Contact/Contact';
import Formation from './containers/Formation/Formation';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/booking"  component={Booking} />
				<Route path="/contacts"  component={Contact}	/>
				<Route path="/formation"  component={Formation} />
				{/* <Redirect to="/" /> */}
			</Switch>
    );
  }
}



export default withRouter(App);
