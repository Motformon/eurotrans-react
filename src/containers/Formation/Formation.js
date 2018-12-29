import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
class Formation extends Component {
	render() {
		return (
			<React.Fragment>
				<Header/>
				<main class="page__main">

					<section class="execution" id="app">
						<h1 class="execution__title execution__title_main text text_regular">Оформление билета</h1>
						<form class="execution__ticket formation" action="transaction.php" method="POST">
							{/* <? for ($i = 1; $i <= $passenger; $i++): ?> */}
								<h2 class="formation__title text text_regular">Пассажир —  {/*<?= $i ?>*/}</h2>
								<div class="formation__wrapper">
									<p class="formation__container">
										<label for="lastName-<?= $i ?>" class="formation__label text text_regular">Фамилия</label>
										<input type="text" id="lastName-<?= $i ?>" name="lastName-<?= $i ?>" placeholder="Иванов"
													class="formation__input text text_regular" required autocomplete="off"/>
									</p>

									<p class="formation__container">
										<label for="firstName-<?= $i ?>" class="formation__label text text_regular">Имя</label>
										<input type="text" id="firstName-<?= $i ?>" name="firstName-<?= $i ?>" placeholder="Иван"
													class="formation__input text text_regular" required autocomplete="off"/>
									</p>

									<p class="formation__container">
										<label for="middleName-<?= $i ?>" class="formation__label text text_regular">Отчество</label>
										<input type="text" id="middleName-<?= $i ?>" name="middleName-<?= $i ?>" placeholder="Иванович"
													class="formation__input text text_regular" required autocomplete="off"/>
									</p>

									<p class="formation__container">
										<label for="birthday-<?= $i ?>" class="formation__label text text_regular">Дата рождения</label>
										<input type="text" id="birthday-<?= $i ?>" name="birthday-<?= $i ?>" placeholder="дд.мм.гггг"
													class="formation__input formation__input_date text text_regular" required autocomplete="off"/>
									</p>

									<p class="formation__container formation__container_sex">
										<span class="formation__label_sex">Пол</span>

										<input type="radio" checked id="male-<?= $i ?>" value="1" name="sex-<?= $i ?>"
													class="formation__input formation__input_radio text text_regular"/>

										<label for="male-<?= $i ?>" class="formation__label formation__label_sex_male text text_regular">Муж</label>
										<input type="radio" id="women-<?= $i ?>" name="sex-<?= $i ?>" value="0" class="formation__input formation__input_radio text text_regular"/>

										<label for="women-<?= $i ?>" class="formation__label formation__label_sex_female text text_regular">Жен</label>

									</p>

									<div class="formation__container formation__container_list" id="nationalityComponent-<?= $i ?>">
										<label for="nationality-<?= $i ?>" class="formation__label text text_regular">Гражданство</label>
										{/* <!-- <input id="nationality-<?= $i ?>" name="nationality-<?= $i ?>" placeholder="Выберите страну"
													class="formation__input text text_regular"
													v-on:click="showCountry" v-model="country" required autocomplete="off"> --> */}
										{/* <input id="countryNumber-<?= $i ?>" class='formation__country-input' type="text" name='countryNumber-<?= $i ?>' v-model='countryNumber' required/> */}
										{/* <div class="formation__country-title formation__input text text_regular" v-on:click="showCountry">

											<span class="formation__country-title--text"> */}
											{/* {{countryName}} */}
											{/* </span>
										</div>			  */}
										{/* <ul class="formation__list" v-if="isCountryList">
											<li class="formation__item text text_regular" v-for="(country, index) in nationalityList" v-on:click="selectCountry($event, index)"> */}
												{/* {{country.SHORTNAME}} */}
{/* 
											</li>
										</ul> */}

									</div>
									<div class="formation__container formation__container_list" id="documentsComponent-<?= $i ?>">
										<label for="documentName-<?= $i ?>" class="formation__label text text_regular">Документ</label>
										{/* <input id="documentNumber-<?= $i ?>" class='formation__document-input' type="text" name='documentNumber-<?= $i ?>' v-model='documentNumber' required/> */}
										{/* <!-- <input id="documentName" name="documentName-<?= $i ?>" placeholder="Выберите документ"
													class="formation__input text text_regular"
														v-model="documentName" required autocomplete="off"> --> */}
														
										{/* <div class="formation__document-title formation__input text text_regular" v-on:click="showDocuments">
											<span class="formation__document-title--text"> */}
											{/* {{documentName}} */}
											{/* </span>
										</div> */}
										{/* <ul class="formation__list" v-if="showDocumentList"> */}
											{/* <li class="formation__item text text_regular" v-for="(document, index) in documentsList"
													v-on:click="selectDocuments($event, index)"> */}
												
												{/* {{document.name}} */}
											{/* </li> */}
										{/* </ul> */}
										
						

									</div>

									<p class="formation__container">
										<label for="numberDocument-<?= $i ?>" class="formation__label text text_regular">Номер документа</label>
										<input type="type" id="numberDocument-<?= $i ?>" name="numberDocument-<?= $i ?>" placeholder="Номер документа"
													class="formation__input text text_regular" required autocomplete="off" disabled/>
									</p>
								</div>
								<h2 class="formation__title text text_regular">Контактные данные</h2>

								<div class="formation__wrapper formation__wrapper_contacts">

									<p class="formation__container">
										<label for="emailUser-<?= $i ?>" class="formation__label text text_regular">E-mail</label>
										<input type="email" id="emailUser-<?= $i ?>" name="emailUser-<?= $i ?>" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z]{0,}[.]{0,1}[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" placeholder="ivanov@mail.ru" class="formation__input text text_regular" required autocomplete="off"/>
									</p>

									<p class="formation__container">
										<label for="phoneUser-<?= $i ?>" class="formation__label text text_regular">Телефон</label>
										<input type="tel" id="phoneUser-<?= $i ?>" pattern=".{17}"  name="phoneUser-<?= $i ?>" placeholder="+7 999 999 99 99"
													class="formation__input text text_regular" required autocomplete="off"/>
												
									</p>
								</div>
								<input type="hidden" name="vedomost_id-<?=$i?>" value="<?=$arPostData['id']?>"/>
								<input type="hidden" name="to-<?=$i?>" value="<?=$arPostData['to']?>"/>
								<input type="hidden" name="from-<?=$i?>" value="<?=$arPostData['from']?>"/>
								<input type="hidden" name="price-<?=$i?>" value="<?=$arPostData['fullprice']?>"/>

									<input type="hidden" name="border-<?=$i?>" value="border"/>
							{/* <? endfor; ?> */}
								<div class="formation__wrapper formation__wrapper_submit">

								<p class="formation__container formation__container_checkbox">

							
									<input type="checkbox" id="agreement" name="emailUserConfirm" placeholder="ivanov@mail.ru"
												class="formation__input feedback-popup__input_checkbox text text_regular agreement--input" required/>
									<label for="agreement" class="formation__label formation__label_checkbox feedback-popup__label_checkbox text text_semibold agreement--label">Согласие на обработку персональных
													данных</label>
									<span class="formation__content formation__content_agreement feedback-popup__content text text_regular">
										Я даю свое согласие ИП Яцунов С.П. на обработку
										моих персональных данных предоставленных мной при регистрации
										на сайте/оформлении на сайте www...ru, для их использования (в т.ч.
										передачу третьим лицам) всоответствии с Федеральным законом от
										27. 07. 2006 ФЗ-152“О защиет персональных данных” в рамках
										и целях, опреде-ленных Политикой конфиденциальности
										и пользовательским соглашением.
									</span>
								</p>

								<p class="formation__container">
									<span class="formation__additional formation__additional_title text text_semibold">Дополнительно</span>
									<span class="formation__additional text text_regular">Для посадки необходим паспорт</span>
									<span class="formation__additional text text_regular">Для посадки необходим распечатанный билет</span>
									<span class="formation__additional text text_regular">Регулярный рейс</span>
								</p>

								<p class="formation__container formation__container_button">
									<span class="formation__route text text_regular">Ставрополь - Москва</span>
									<span class="formation__price text text_regular">{/*<?= $arPostData['fullprice']?> р.*/}</span>
									<input type='submit' class="formation__button text text_regular button button_theme_red text text_regular" value='Оплатить билет' id="payButtom" />
								</p>
							</div>
						</form>
					</section>

				</main>
				<Footer/>
			</React.Fragment>
		);
	}
}

export default Formation;