<?php
/**
 * Created by PhpStorm.
 * User: 45-parallel.org
 * Date: 26.09.2018
 * Time: 10:48
 */
?>
<footer class="main-footer page__main-footer">
  <section class="main-footer__top">
    <h2 class="visually-hidden">Верхняя секция основного подвала страницы</h2><a href="/" class="logo  main-footer__logo ">
      <img class='logo__image' src="img/header-logo.png"></a>
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
          <li class="additional-menu__item"><a class="additional-menu__link text text_regular" href="">Купить билеты</a></li>
        </li>
      </ul>
    </section>
    <a class="contacts contacts_footer main-footer__contacts" href="tel:88007002099"><span
        class="contacts__content text text_regular">Наш номер телефона</span><span
        class="contacts__phone text text_semibold">8-800-700-20-99</span></a>
  </section>
  <section class="main-footer__copyright">
    <h2 class="visually-hidden">Секция с копирайтами</h2>
    <p class="main-footer__copy text text_regular">ИП Яцунов М.С.</p>
  </section>
</footer>
 
<script src="js/flatpickr.min.js"></script>
<script>
flatpickr('#birthday-1', {
    enableTime: false,
    dateFormat: 'd-m-Y',
    time_24hr: true,
		locale: 'ru'
  })
</script>

<script src="/libs/text-mask/vanillaTextMask.js"></script>

<script src="/libs/inputmask/inputmask.dependencyLib.js"></script>
<script src="/libs/inputmask/inputmask.js"></script>
 <script src="/libs/inputmask/inputmask.extensions.js"></script>

<script src="js/formation/countryOKMC.js"></script>
<script src="js/formation/formation.js"></script>


</body>

</html>