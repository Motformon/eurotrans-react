import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = props => (
	<header className="main-header main-header_booking">
		<div className="main-header__top">
			<NavLink className="logo main-header__logo" to="/">
				<img className="logo__image" src="/img/header-logo.png" alt='EvroTrans'/>
			</NavLink>
		</div>
	</header>
);

export default Header;