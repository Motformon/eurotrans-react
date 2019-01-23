import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const Contact = (props) => {
	console.log(props);
	 return (
	<div className='page'>
		<Header/>
		<main className="page__main content">
			<section className="tickets">
					<h2>Контакты:</h2>
					<p><strong>Адрес:</strong> г. Ставрополь, Старомарьевское шоссе 32ж</p>
					<p><strong>Телефон:</strong> 8-800-551-08-11</p>
					<p><strong>Время работы:</strong> ежедневно 8:00-20:00</p>
			</section>
		</main>
		<Footer/>
	</div>
	)
	 };


export default Contact;