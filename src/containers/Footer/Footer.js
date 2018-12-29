import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = props => (
	<div>
		<footer className="main-footer page__main-footer">
			<section className="main-footer__top">
					<h2 className="visually-hidden">Верхняя секция основного подвала страницы</h2>
					<NavLink className="logo main-footer__logo" to='/'>
						<img className="logo__image" alt='evrotrans' src="img/header-logo.png"/>
					</NavLink>
					<section className="additional-menu main-footer__company">
							<h3 className="additional-menu__title text text_semibold">O компании</h3>
							<ul className="additional-menu__list">
									<li className="additional-menu__item">
									<a className="additional-menu__link text text_regular" href="">Договор оферты</a>
									</li>
									<li className="additional-menu__item">
									<a className="additional-menu__link text text_regular" href="">Политика конфиденциальности</a>
									</li>
									<li className="additional-menu__item">
									<NavLink
										className="additional-menu__link text text_regular"
										to='/contacts'
									>
										Контакты
									</NavLink>
									</li>
							</ul>
					</section>
					<section className="additional-menu main-footer__company">
							<h3 className="additional-menu__title text text_semibold">Пользователям</h3>
							<ul className="additional-menu__list">
									<li className="additional-menu__item"><a className="additional-menu__link text text_regular" href="">Реквизиты компании</a></li>
							</ul>
					</section><a className="contacts contacts_footer main-footer__contacts" href="tel:8800121212"><span className="contacts__content text text_regular">Наш номер телефона</span><span className="contacts__phone text text_semibold">8-800-123-12-12</span></a>
			</section>
			<section className="main-footer__copyright">
					<h2 className="visually-hidden">Секция с копирайтами</h2>
			</section>
		</footer>
	</div>
);

export default Footer;