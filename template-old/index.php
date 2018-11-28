
<?require_once $_SERVER['DOCUMENT_ROOT']."/projects/eurotrans/views/index/header.php";?>

    <header class="main-header">
        <div class="main-header__top">
					<a class="logo main-header__logo" href="/">
						<img class="logo__image" src="img/header-logo.png">
					</a>
					<a href="https://arenda.evrotrans.net/" class="main-header__top-arenda text_regular">Заказ и аренда автобусов</a>
					<a class="contacts main-header__contacts" href="tel:88007002099">
						<span class="contacts__content text text_regular contacts__content_header">Звонок по России бесплатный</span>
						<span class="contacts__phone text text_semibold contacts__content_header">8-800-700-20-99</span>
					</a>
        </div>
        <section class="promo main-header__promo">
            <h1 class="visually-hidden">Билет на автобусы</h1>
            <h2 class="promo__title text text_extrabold">Доступные билеты<span class="promo__full-stroke"> на автобус от перевозчика</span></h2>
            <form class="booking-form main-header__form" action="/booking.php" id="main-header__form" v-on:click.capture="removeList">
                <div class="booking-form__container" @click="removeList" id="cityFromHeader">
                    <label class="booking-form__label text text_regular" for="from">Откуда</label>
                    <input class="booking-form__input booking-form__input_select" id="from" autocomplete="off" name="from" v-model="city" v-on:keyup='choiceListItem($event)' v-on:focus="showList(1)" v-on:input='checkInputCity($event.target)' placeholder="Город отправления" required>
                    <ul class="booking-form__cities-list" v-if="isShowList">
                        <li class="booking-form__option booking-form__option_cities text text_regular" v-for="city in cities" v-on:click="setCity">{{city.name}}</li>
                    </ul>
                </div>
                <div class="booking-form__container" @click="removeList" id="cityToHeader">
                    <label class="booking-form__label text text_regular" for="to">Куда</label>
                    <input class="booking-form__input booking-form__input_select" id="to" autocomplete="off" name="to" v-model="city" v-on:focus="showList(2)" v-on:input='checkInputCity($event.target)' v-on:keyup='choiceListItem($event)' required placeholder="Город прибытия">
                    <ul class="booking-form__cities-list" v-if="isShowList">
                            <li class="booking-form__option booking-form__option_cities text text_regular" v-for="city in cities" v-on:click="setCity">{{city.name}}</li>
                    </ul>
                </div>
                <div class="booking-form__container">
                    <label class="booking-form__label text text_regular" for="date">Когда</label>
                    <input class="booking-form__input booking-form__input_calendar text text_regular" type="text" id="dateHeader" name="date" placeholder="дд.мм.гггг" autocomplete="off" required>
                </div>
                <div class="booking-form__container" id="passengerHeader">
                    <label class="booking-form__label text text_regular" for="passengers">Пассажиры</label>
                    <input class="booking-form__input booking-form__input_passengers text text_regular" type="text" id="passengers" v-model="getPassenger" v-on:click="showPassengerList" autocomplete="off" disabled>
                    <ul class="booking-form__cities-list booking-form__cities-list_passenger" v-show="isShowList">
                        <li class="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
                            <p class="booking-form__passenger text text_regular">Взрослые<span class="booking-form__container-passenger">
                                      <button class="booking-form__count-passenger booking-form__count-passenger_minus" v-on:click.prevent="adultMinus()"><span class="visually-hidden">Минус</span></button>
                                <input class="booking-form__counter text text_regular" v-model="adult" id="adult" name="adult" required autocomplete="off" value="0">
                                <button class="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" v-on:click.prevent="adult += 1"><span class="visually-hidden">Плюс</span></button></span>
                            </p>
                        </li>
                        <li class="booking-form__option booking-form__option_passengers booking-form__option_passenger">
                            <p class="booking-form__passenger text text_regular">Дети<span class="booking-form__container-passenger">
                                      <button class="booking-form__count-passenger booking-form__count-passenger_minus" v-on:click.prevent="childrenMinus()"><span class="visually-hidden">Минус</span></button>
                                <input class="booking-form__counter text text_regular" v-model="children" name="children" required autocomplete="off" value="0">
                                <button class="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" v-on:click.prevent="children += 1"><span class="visually-hidden">Плюс</span></button></span>
                            </p>
                        </li>
                    </ul>
                </div>
                <p class="booking-form__container">
<!--                    <button class="booking-form__button button button_theme_red text text_regular">Найти билеты</button>-->
                    <input type="submit" value="Найти билеты" class="booking-form__button button button_theme_red text text_regular">
                </p>
            </form>
        </section>
    </header>
    <main class="page__main">
        <section class="routes page__routes">
            <h1 class="routes__title text text_semibold">Популярные направления</h1>
            <ul class="routes__list">
                <li class="routes__item">
                    <article class="route routes__article" style='background-image: url("/projects/eurotrans/img/routes-bg.jpg");'>
                        <h2 class="route__title text text_semibold">Ставрополь - Москва</h2>
                        <p class="route__sending text text_regular">Отправление</p>
                        <ul class="route__list">
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">09:00</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">12:30</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">17:00</span></li>
                        </ul>
                        <p class="route__price text text_semibold">От 2260р.</p><a class="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
                    </article>
                </li>
                <li class="routes__item">
                    <article class="route routes__article" style='background-image: url("/projects/eurotrans/img/stavropol.jpg");'>
                        <h2 class="route__title text text_semibold">Москва - Ставрополь</h2>
                        <p class="route__sending text text_regular">Отправление</p>
                        <ul class="route__list">
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">09:00</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">13:30</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">20:00</span></li>
                        </ul>
                        <p class="route__price text text_semibold">От 2260р.</p><a class="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
                    </article>
                </li>
                <li class="routes__item">
                    <article class="route routes__article" style='background-image: url("/projects/eurotrans/img/routes-bg.jpg");'>
                        <h2 class="route__title text text_semibold">Нефтекумск - Москва</h2>
                        <p class="route__sending text text_regular">Отправление</p>
                        <ul class="route__list">
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">09:00</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">16:30</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">18:00</span></li>
                        </ul>
                        <p class="route__price text text_semibold">От 2260р.</p><a class="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
                    </article>
                </li>
                <li class="routes__item">
                    <article class="route routes__article" style='background-image: url("/projects/eurotrans/img/Neftekumsk.jpg");'>
                        <h2 class="route__title text text_semibold">Москва - Нефтекумск</h2>
                        <p class="route__sending text text_regular">Отправление</p>
                        <ul class="route__list">
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">09:00</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">12:30</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">17:00</span></li>
                        </ul>
                        <p class="route__price text text_semibold">От 2260р.</p><a class="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
                    </article>
                </li>
                <li class="routes__item">
                    <article class="route routes__article" style='background-image: url("/projects/eurotrans/img/Budenovsk.jpg");'>
                        <h2 class="route__title text text_semibold">Буденовск - Москва</h2>
                        <p class="route__sending text text_regular">Отправление</p>
                        <ul class="route__list">
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">09:00</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">13:30</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">20:00</span></li>
                        </ul>
                        <p class="route__price text text_semibold">От 2260р.</p><a class="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
                    </article>
                </li>
                <li class="routes__item">
                    <article class="route routes__article" style='background-image: url("/projects/eurotrans/img/Levokum.jpg");'>
                        <h2 class="route__title text text_semibold">Левокумское - Москва</h2>
                        <p class="route__sending text text_regular">Отправление</p>
                        <ul class="route__list">
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">09:00</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">16:30</span></li>
                            <li class="route__item text text_regular">
															<!-- <span class="route__date">08.06 |</span> -->
															<span class="route__time">18:00</span></li>
                        </ul>
                        <p class="route__price text text_semibold">От 2260р.</p><a class="route__booking button button_theme_blue text text_semibold" href="booking.html">Забронировать</a>
                    </article>
                </li>
            </ul>
        </section>
        <section class="advantage page__advantage">
						<h1 class="advantage__title text text_semibold">Преимущество бронирования у нас</h1>
							<div class="swiper-container">
									<div class="swiper-wrapper advantage__list">
										<div class="swiper-slide">
											<div class="advantage__item advantage__item_driver">
													<p class="advantage__subtitle text text_semibold">Опытные водители</p>
													<p class="advantage__content text text_regular">Вас будет перевозить водитель со стажем пассажирских перевозок не менее 10 лет.</p>
											</div>
										</div>								
										<div class="swiper-slide">
											<div class="advantage__item advantage__item_safety">
													<p class="advantage__subtitle text text_semibold">Безопасные поездки</p>
													<p class="advantage__content text text_regular">Наши автобусы проходят технический осмотр, а водители медицинскую проверку перед каждой поездкой. На случай непредвиденных ситуаций у нас всегда есть дежурный водитель и резервный автобус.</p>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="advantage__item advantage__item_station">
													<p class="advantage__subtitle text text_semibold">Остановки каждые 4 часа для обеда и отдыха</p>
													<p class="advantage__content text text_regular">Ваш маршрут предусматривает необходимые остановки в местах, где можно можно легко перекусить или плотно пообедать домашней едой, а также пройтись и размяться.</p>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="advantage__item advantage__item_card-payment">
													<p class="advantage__subtitle text text_semibold">Безопасная олата картой</p>
													<p class="advantage__content text text_regular">Мы работаем только с надежными системами приема платежей, которые шифруют данные и регулярно проходят проверку безопасности по стандартам Visa и Mastercard.</p>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="advantage__item advantage__item_insurance">
												<p class="advantage__subtitle text text_semibold">Все пассажиры застрахованны</p>
												<p class="advantage__content text text_regular">В стоимость билета включено страхование.</p>
											</div>
										</div>
								</div>
								<!-- If we need pagination -->
								<div class="swiper-pagination"></div>
					
						</div>

        </section>
        <section class="feedback page__feedback">
            <div class="feedback__wrapper">
                <div class="feedback__container">
										<h1 class="feedback__title text text_semibold">Контролируем качество перевозок</h1>
										<img src="img/gen-dir.jpg" class='feedback__img-dir' alt="">
                    <p class="feedback__content text text_regular">
												Максим Яцунов, исполнительный директор.
												<span class='feedback__content--quote'> Помогите нам стать лучше. Если у вас есть пожелания, рекомендации или претензии относительно оказанных услуг, пожалуйста, направьте их лично мне.</span>
											
										</p>
								</div>
								<a class="button button_theme_red text text_regular feedback__link--write">Написать руководителю</a>
								<input type="hidden" class='feedback__link '>
            </div>
        </section>
        <section class="buses page__buses">
            <header class="buses__header">
                <h2 class="buses__title text text_semibold">Комфортабельные автобусы</h2>
                <p class="buses__header-description text text_regular">все для удобства вашей поездки</p>
						</header>
								 <div class="swiper-container">
									<div class="swiper-wrapper buses__list">
										<div class="swiper-slide">
											<div class="buses__item">
												<picture class="buses__picture">
														<source type="image/webp" srcset="img/mercedes-mobile.webp"><img class="buses__image" src="img/mercedes-mobile.jpg" alt="Mercedes Sprinter">
												</picture>
												<div class="buses__container">
														<p class="buses__model text text_semibold">Mercedes Sprinter
																<ul class="buses__features-list">
																		<li class="buses__features-item text text_regular">Комфортные сидения</li>
																		<li class="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li class="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
										<div class="swiper-slide">
									    <div class="buses__item">
												<picture class="buses__picture">
														<source type="image/webp" srcset="img/hyundai-mobile.webp"><img class="buses__image" src="img/hyundai-mobile.jpg" alt="Hyundai">
												</picture>
												<div class="buses__container">
														<p class="buses__model text text_semibold">Hyundai
																<ul class="buses__features-list">
																		<li class="buses__features-item text text_regular">Комфортные сидения</li>
																		<li class="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li class="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																		<li class="buses__features-item text text_regular">Микрофон для громкой связи с пассажирами</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="buses__item">
												<picture class="buses__picture">
														<source type="image/webp" srcset="img/1-stage-mobile.webp"><img class="buses__image" src="img/1-stage-mobile.jpg" alt="1,5 этажные автобусы">
												</picture>
												<div class="buses__container">
														<p class="buses__model text text_semibold">1,5 этажные автобусы
																<ul class="buses__features-list">
																		<li class="buses__features-item text text_regular">Комфортные сидения</li>
																		<li class="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li class="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																		<li class="buses__features-item text text_regular">Микрофон для громкой связи с пассажирами</li>
																		<li class="buses__features-item text text_regular">Туалет</li>
																		<li class="buses__features-item text text_regular">Мини-кухня</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="buses__item">
												<picture class="buses__picture">
														<source type="image/webp" srcset="img/2-stage-mobile.webp"><img class="buses__image" src="img/2-stage-mobile.jpg" alt="2 этажные автобусы">
												</picture>
												<div class="buses__container">
														<p class="buses__model text text_semibold">2 этажные автобусы
																<ul class="buses__features-list">
																		<li class="buses__features-item text text_regular">Комфортные сидения</li>
																		<li class="buses__features-item text text_regular"> Откидывающиеся сидения</li>
																		<li class="buses__features-item text text_regular">Индивидуальный кондиционер</li>
																		<li class="buses__features-item text text_regular">Микрофон для громкой связи с пассажирами</li>
																		<li class="buses__features-item text text_regular">Туалет</li>
																		<li class="buses__features-item text text_regular">Мини-кухня</li>
																</ul>
														</p>
												</div>
											</div>
										</div>
								</div>
								<!-- If we need pagination -->
								<div class="swiper-pagination"></div>
					
						</div>
          

        </section>
        <!--include blocks/route-map/route-map-->
        <section class="features page__features">
						<h2 class="features__title text text_semibold">Исправные и чистые автобусы</h2>
							<div class="swiper-container">
								<div class="swiper-wrapper ready__items">
									<div class="swiper-slide">
										<div class="ready__item">
											<img src="img/features-1.jpg" alt="EuroTrans" class="ready__item-img">
											<h3 class="ready__item-title">Отправляем автобусы на ТО перед каждой поездкой.</h3>
											<p class="ready__item-text">Проверяем транспорт на собственной станции техосмотра. В случае выявления неисправности, на рейс выходит резервный автобус.</p>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="ready__item">
											<img src="img/features-2.jpg" alt="EuroTrans" class="ready__item-img">
											<h3 class="ready__item-title">Проводим медосмотр водителей перед рейсом. </h3>
											<p class="ready__item-text">Если наш мед.персонал выявляет отклонения от нормы в самочувствии водителя, его заменяет коллега.</p>
										</div>
									</div>
									<div class="swiper-slide">

									
										<div class="ready__item">
											<img src="img/features-3.jpg" alt="EuroTrans" class="ready__item-img">
											<h3 class="ready__item-title">Выводим транспорт на маршрут только после тщательной уборки. </h3>
											<p class="ready__item-text">Моем и пылесосим автобусы до и после рейсов.</p>
										</div>
									</div>
								</div>
								<div class="swiper-pagination"></div>
						</div>


        </section>
        <section class="booking page__booking">
            <header class="booking__header">
                <h2 class="booking__title text text_semibold">Забронируйте и оплатите билет сейчас</h2>
            </header>
            <section class="booking__container">
                <h3 class="visually-hidden"></h3>
                <form class="booking-form booking__form" action="/booking.php" id="booking__form" v-on:click.capture="removeList">
                    <div class="booking-form__container booking-form__container_footer" @click="removeList" id="cityFromFooter">
                        <label class="booking-form__label text text_regular booking-form__label_footer" for="from">Откуда</label>
                        <input class="booking-form__input booking-form__input_select" id="from" autocomplete="off" name="from" v-model="city" v-on:click="showList(1)" v-on:keyup='choiceListItem($event)'  v-on:input='checkInputCity($event.target)' placeholder="Город отправления" required>
                        <ul class="booking-form__cities-list" v-if="isShowList">
                            <li class="booking-form__option booking-form__option_cities text text_regular" v-for="city in cities" v-on:click="setCity">{{city.name}}</li>
                        </ul>
                    </div>
                    <div class="booking-form__container booking-form__container_footer" @click="removeList" id="cityToFooter">
                        <label class="booking-form__label text text_regular booking-form__label_footer" for="to">Куда</label>
                        <input class="booking-form__input booking-form__input_select" id="to" autocomplete="off" name="to" v-model="city" v-on:click="showList(2)" v-on:input='checkInputCity($event.target)' v-on:keyup='choiceListItem($event)' required placeholder="Город прибытия">
                        <ul class="booking-form__cities-list" v-if="isShowList">
                            <li class="booking-form__option booking-form__option_cities text text_regular" v-for="city in cities" v-on:click="setCity">{{city.name}}</li>
                        </ul>
                    </div>
                    <div class="booking-form__container booking-form__container_footer">
                        <label class="booking-form__label text text_regular booking-form__label_footer" for="date">Когда</label>
                        <input class="booking-form__input booking-form__input_calendar text text_regular" type="text" id="dateFooter" name="date" placeholder="дд.мм.гггг" autocomplete="off" required>
                    </div>
                    <div class="booking-form__container booking-form__container_footer" id="passengerFooter">
                        <label class="booking-form__label text text_regular booking-form__label_footer" for="passengers">Пассажиры</label>
                        <input class="booking-form__input booking-form__input_passengers text text_regular booking-form__input_footer" type="text" id="passengers" v-model="getPassenger" v-on:click="showPassengerList" autocomplete="off" disabled>
                        <ul class="booking-form__cities-list booking-form__cities-list_passenger" v-show="isShowList">
                            <li class="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
                                <p class="booking-form__passenger text text_regular">Взрослые<span class="booking-form__container-passenger">
                                      <button class="booking-form__count-passenger booking-form__count-passenger_minus" v-on:click.prevent="adult -= 1"><span class="visually-hidden">Минус</span></button>
                                    <input class="booking-form__counter text text_regular" v-model="adult" id="adult" name="adult" required autocomplete="off" value="0">
                                    <button class="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" v-on:click.prevent="adult += 1"><span class="visually-hidden">Плюс</span></button></span>
                                </p>
                            </li>
                            <li class="booking-form__option booking-form__option_passengers booking-form__option_passenger">
                                <p class="booking-form__passenger text text_regular">Дети<span class="booking-form__container-passenger">
                                      <button class="booking-form__count-passenger booking-form__count-passenger_minus" v-on:click.prevent="children -= 1"><span class="visually-hidden">Минус</span></button>
                                    <input class="booking-form__counter text text_regular" v-model="children" name="children" required autocomplete="off" value="0">
                                    <button class="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active" v-on:click.prevent="children += 1"><span class="visually-hidden">Плюс</span></button></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <p class="booking-form__container booking-form__container_footer">
                        <button class="booking-form__button button button_theme_red text text_regular">Найти билеты</button>
                    </p>
                </form>
            </section>
            <!-- <section class="booking__container">
                <h3 class="booking__subtitle text text_semibold">Наши акции</h3>
                <ul class="booking__list">
                    <li class="booking__item">
                        <p class="booking__description text text_semibold">Скидка 500 рублей на первую поездку</p>
                    </li>
                    <li class="booking__item">
                        <p class="booking__description text text_semibold">-50% с билета на детский билет</p>
                    </li>
                </ul>
  
            </section> -->

        </section>
				<section class="address">
					<div class="address__map">
						<div id="map" class="address__item-map"></div>	
					</div>
				</section>

    </main>
<?require_once $_SERVER['DOCUMENT_ROOT']."/views/footer.php"?>