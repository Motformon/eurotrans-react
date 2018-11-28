<?php
/**
 * Created by PhpStorm.
 * User: 45-parallel.org
 * Date: 26.09.2018
 * Time: 10:20
 */
?>
<footer class="main-footer page__main-footer footer">
        <section class="main-footer__top">
						<h2 class="visually-hidden">Верхняя секция основного подвала страницы</h2>
						<a class="logo main-footer__logo" href="/">
							<img class="logo__image" src="/img/header-logo.png">
						</a>
            <section class="additional-menu main-footer__company">
                <h3 class="additional-menu__title text text_semibold">O компании</h3>
                <ul class="additional-menu__list">
                    <li class="additional-menu__item"><a class="additional-menu__link text text_regular" href="/about/about.php">О нас</a></li>
                    <li class="additional-menu__item"><a class="additional-menu__link text text_regular" target="_blank" href="/upload/offer.pdf">Договор оферты</a></li>
                    <li class="additional-menu__item"><a class="additional-menu__link text text_regular" target="_blank" href="/upload/privacy policy.pdf">Политика конфиденциальности</a></li>
                    <li class="additional-menu__item"><a class="additional-menu__link text text_regular" href="/about/contacts.php">Контакты</a></li>
                </ul>
            </section>
            <section class="additional-menu main-footer__company">
                <h3 class="additional-menu__title text text_semibold">Пользователям</h3>
                <ul class="additional-menu__list">
                    <li class="additional-menu__item"><a class="additional-menu__link text text_regular" target="_blank" href="/upload/requisites.pdf">Реквизиты компании</a></li>
                    <li class="additional-menu__item"><a class="additional-menu__link text text_regular" href="/about/price.php">Прайс</a></li>
                    <!-- <li class="additional-menu__item"><a class="additional-menu__link text text_regular" href="">Купить билеты</a></li> -->
                </ul>
            </section><a class="contacts contacts_footer main-footer__contacts" href="tel:88007002099"><span class="contacts__content text text_regular">Наш номер телефона</span><span class="contacts__phone text text_semibold">8-800-700-20-99</span></a>
        </section>
        <section class="main-footer__copyright">
						<p class="main-footer__copy text text_regular">ИП Яцунов С.П.</p><a class="main-footer__copy-link text text_regular" href="#"></a>
						<a href="https://webcosmos.ru/" class="main-footer__webcosmos-link">
							<img src="/img/logo-webcosmos.png" alt="" class="main-footer__webcosmos-img">
						</a>
        </section>
    </footer>
    <template>
      <section class="feedback-popup">
        <div class="feedback-popup__main-wrapper">
          <h2 class="feedback-popup__title text text_semibold">Оставить отзыв</h2>
          <form class="feedback-popup__form">
            <div class="feedback-popup__wrapper feedback-popup__wrapper_input">
              <p class="feedback-popup__container">
                <input class="feedback-popup__input text text_regular" id="userName" type="text" required>
                <label class="feedback-popup__label text text_regular" for="userName">Ваше имя</label>
              </p>
              <p class="feedback-popup__container">
                <input class="feedback-popup__input text text_regular" id="rideNumber" type="text" required>
                <label class="feedback-popup__label text text_regular" for="rideNumber">Номер рейса</label>
              </p>
              <p class="feedback-popup__container">
                <input class="feedback-popup__input text text_regular" id="phone" type="tel" required>
                <label class="feedback-popup__label text text_regular" for="phone">Номер телефона</label>
              </p>
            </div>
            <div class="feedback-popup__wrapper feedback-popup__wrapper_textarea">
              <textarea class="feedback-popup__input feedback-popup__input_textarea" id="feedback" required></textarea>
              <label class="feedback-popup__label text text_regular" for="feedback">Ваш отзыв</label>
            </div>
            <div class="feedback-popup__wrapper feedback-popup__wrapper_submit">
              <button class="feedback-popup__button button button_theme_red">Оставить отзыв</button>
            </div>
            <div class="feedback-popup__wrapper feedback-popup__wrapper_checkbox">
              <input class="feedback-popup__input feedback-popup__input_checkbox" id="agreement" type="checkbox">
              <label class="feedback-popup__label feedback-popup__label_checkbox text text_semibold" for="agreement">Согласие на обработку персональных данных</label>
              <p class="feedback-popup__content text text_regular">
Я даю свое согласие ИП Яцунов С.П. на
                обработку моих персональных данных предоставленных
                 мной при регистрации на сайте/ оформлении на сайте www.
                ..ru, для их использования (в т.ч. передачу третьим лицам) в
                соответствии с Федеральным законом от 27. 07. 2006 ФЗ-152
                “О защиет персональных данных” в рамках и целях, опреде-
ленных<a class="feedback__link"> Политикой конфиденциальности</a>и<a class="feedback__link"> пользовательским соглашением.</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </template>

	<div class="popup-boss" >
		<div class="popup-boss__mask"></div>
		<div class="popup-boss__window">
			<div class="popup-boss__close"></div>
			<form id="order-popup-boss" class="popup-boss__form-order" method="POST" onsubmit='return false;'>
				<input class='popup-boss__form-inf' type="text" name="name" placeholder="Ваше имя" required>
				<input class='popup-boss__form-inf popup-boss__form-inf--phone' type="text" name="phone" placeholder="Ваш телефон" required>
				<input class='popup-boss__form-inf' type="email" name="email" placeholder="Ваш email" required>
				<textarea name="text" class='popup-boss__form-inf popup-boss__form-inf--textarea' placeholder='Текст обращения'></textarea>
				<input class='popup-boss__button' type="submit" value="Отправить" onclick='sendCalcMail();'>
			</form>
		</div>
	</div>

	<div class="popup-thank">
		<div class="popup-thank__mask"></div>
		<div class="popup-thank__window">
			<div class="popup-thank__close"></div>
			<img src="/img/gen-dir.jpg" alt="EuroTrans" class="popup-thank__img">
			<p class="popup-thank__text">Спасибо, что помогаете нам стать лучше. Я лично рассмотрю ваше обращение и отвечу вам на него в течение трех дней.</p>
		</div>
	</div>

	<div class="top-scroll"></div>

    <script src="/js/flatpickr.min.js"></script>
    <script>
            flatpickr('#dateHeader', {
                        enableTime: false,
                        dateFormat: 'd-m-Y',
                        time_24hr: true,
												locale: 'ru',
												allowInput:true,
												minDate: "today"
                    });
                    flatpickr('#dateFooter', {
                        enableTime: false,
                        dateFormat: 'd-m-Y',
                        time_24hr: true,
												locale: 'ru',
												allowInput:true,
												minDate: "today"
                    });
		</script>
		<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
		<script src="/libs/swiper/swiper.min.js"></script>

		<script src="/libs/text-mask/vanillaTextMask.js"></script>

		<script src="/js/main.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
function sendCalcMail() {
  $("#order-popup-boss").submit(function(){
    $.ajax({
      type: "POST",
      url: "/post/post.php",
      data: $(this).serialize(),
      success: function(response) {
        if (response) {
						document.querySelector(".popup-boss").classList.remove("popup-boss--active");
          	document.querySelector(".popup-thank").classList.add("popup-thank--active");
						document.querySelector("body").style.overflowY = "hidden";
        } else {
          console.log("Ошибка отправки");
        }
      },
      error: function(response) {
        console.log('Файл не найден');
      }
    })
  });
}
</script>

</body>

</html>