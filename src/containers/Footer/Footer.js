import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="main-footer page__main-footer">
					<section className="main-footer__top">
							<h2 className="visually-hidden">Верхняя секция основного подвала страницы</h2>
							<a className="logo main-footer__logo" href="/">
								<img className="logo__image" alt='evrotrans' src="img/logo.png"/>
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

export default Footer;