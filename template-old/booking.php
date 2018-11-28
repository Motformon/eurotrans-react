<?
require_once $_SERVER['DOCUMENT_ROOT']."/utils/make_cityes.php";
require_once $_SERVER['DOCUMENT_ROOT']."/utils/make_tikets.php";
?>
<?require_once $_SERVER['DOCUMENT_ROOT']."/views/booking/header.php";?>
<div class="tikets_show" style="display:none">
    <?echo '<pre>';print_r($arTikets);echo '</pre>';?>
</div>
<header class="main-header main-header_booking">
  <div class="main-header__top"><a class="logo main-header__logo" href="/"><img class="logo__image" src="img/header-logo.png"></a>
  </div>
  <div class="main-header__booking-form">
    <h1 class="main-header__title text text_regular">
      <?= $fromCity ?> — <?= $toCity ?></h1>
    <form class="booking-form booking-form_page-booking" action="/booking.php" id="booking-form_page-booking"
          v-on:click.capture="removeList">
      <div class="booking-form__container" @click="removeList" id="cityFromFooter">
        <label class="booking-form__label text text_regular" for="from">Откуда</label>
        <input class="booking-form__input booking-form__input_select" id="from" autocomplete="off" name="from"
               v-model="city" v-on:keyup='choiceListItem($event)' v-on:input='checkInputCity($event.target)' v-on:click="showList(1)" required placeholder="Город отправления">
        <ul class="booking-form__cities-list" v-if="isShowList">
            <li class="booking-form__option booking-form__option_cities text text_regular" v-for="city in cities" v-on:click="setCity">{{city.name}}</li>
        </ul>
      </div>
      <div class="booking-form__container" @click="removeList" id="cityToFooter">
        <label class="booking-form__label text text_regular" for="to">Куда</label>
        <input class="booking-form__input booking-form__input_select" id="to" autocomplete="off" name="to"
               v-model="city" v-on:keyup='choiceListItem($event)' v-on:click="showList(2)" v-on:input='checkInputCity($event.target)' required placeholder="Город прибытия">
        <ul class="booking-form__cities-list" v-if="isShowList">
            <li class="booking-form__option booking-form__option_cities text text_regular" v-for="city in cities" v-on:click="setCity">{{city.name}}</li>
        </ul>
      </div>
      <div class="booking-form__container">
        <label class="booking-form__label text text_regular" for="dateHeader">Когда</label>
        <input class="booking-form__input booking-form__input_calendar text text_regular" type="text" id="dateHeader" name="date" placeholder="<?= $dateRoutes ?>" autocomplete="off" required>
      </div>
      <div class="booking-form__container" id="passengerFooter">
        <label class="booking-form__label text text_regular" for="passengers">Пассажиры</label>
        <input class="booking-form__input booking-form__input_passengers text text_regular" type="text" id="passengers"
               value="Пассажиры" v-model="getPassenger" v-on:click="showPassengerList" autocomplete="off" disabled>
        <ul class="booking-form__cities-list booking-form__cities-list_passenger" v-show="isShowList">
          <li
            class="booking-form__option booking-form__option_passengers text text_regular booking-form__option_passenger">
            <p class="booking-form__passenger text text_regular">Взрослые<span
                class="booking-form__container-passenger">
              <button class="booking-form__count-passenger booking-form__count-passenger_minus"
                      v-on:click.prevent="adult -= 1"><span
                  class="visually-hidden">Минус</span></button>
              <input class="booking-form__counter text text_regular" v-model="adult" name="adult">
              <button
                class="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"
                v-on:click.prevent="adult += 1"><span
                  class="visually-hidden">Плюс</span></button></span>
            </p>
          </li>
          <li class="booking-form__option booking-form__option_passengers booking-form__option_passenger">
            <p class="booking-form__passenger text text_regular">Дети<span class="booking-form__container-passenger">
            <button class="booking-form__count-passenger booking-form__count-passenger_minus"
                    v-on:click.prevent="children -= 1"><span
                class="visually-hidden">Минус</span></button>
            <input class="booking-form__counter text text_regular" v-model="children"
                   name="children">
            <button
              class="booking-form__count-passenger booking-form__count-passenger_plus booking-form__count-passenger_active"
              v-on:click.prevent="children += 1"><span class="visually-hidden">Плюс</span></button></span>
            </p>
          </li>
        </ul>
      </div>
      <p class="booking-form__container">
        <button class="booking-form__button button button_theme_red text text_regular">Найти билеты</button>
      </p>
    </form>
  </div>
</header>
<main class="page__main">
  <section class="tickets">
    <? if(isset($message)): ?>
      <h2 class="tickets__title text text_regular"><?= $message ?></h2>
    <? else: ?>
      <h2 class="tickets__title text text_regular">Все рейсы</h2>
    <ul class="tickets__list">
      <?foreach ($arTikets->routes as $routes)
          {?>
          <form action="formation.php" method="POST">
              <li class="tickets__item ticket">
                  <div class="ticket__content">
                      <p class="ticket__time text text_regular">
													<span class="ticket__wrapper">
														<span class="ticket__departure">Время отправления</span>
														<span class="ticket__time-from"><?= $routes->time_start ?></span>
													</span>
													
														<span class="ticket__date"><?= $routes->date ?></span>
													<span class="ticket__time-full"><?= $routes->time_in_route ?></span>
													<span class="ticket__wrapper">
														<span class="ticket__arrival">Время прибытия</span>
														<span class="ticket__time-to"><?= $routes->time_end ?></span>

													</span>
                          <span class="ticket__date"><?= $routes->date_end ?></span>
                      </p>
                      <p class="ticket__routes text text_regular">
                          <?foreach ($routes->route as $key => $point)
                          {
                              if ($key == 0):?>
                                  <span class="ticket__station-from"><?= $routes->from  ?></span>
                              <?else:?>
                                    <span class="ticket__station-from"><?= $point->locality?><!-- Время прибытия:-->
<!--                                      --><?//echo date("H:i:s", strtotime($routes->time_start) + (strtotime($point->time_to_station) - strtotime("00:00:00"))) . "\n";?>
                                    </span>
                              <?endif;?>
                          <?}?>
                      </p>
                  </div>
                  <div class="ticket__price">
                      <p class="ticket__order text text_regular">
                          <?$price = ($routes->route[0]->price_from->adult * $adult)+($routes->route[0]->price_from->children * $children);?>
                          <?=$price?> р.
                      </p>
                      <input type="hidden" name="id" value="<?= $routes->id ?>">
                      <input type="hidden" name="adult" value="<?= $adult ?>">
                      <input type="hidden" name="children" value="<?= $children ?>">
                      <input type="hidden" name="fullprice" value="<?= $price ?>">
                      <input type="hidden" name="to" value="<?= $routes->to ?>">
                      <input type="hidden" name="from" value="<?= $routes->from ?>">
                      <input type="submit" class="ticket__link button button_theme_red text text_regular" value="Купить билет">
                      </input>
                  </div>
              </li>
          </form>
        <?}?>
    </ul>
    <? endif ?>
  </section>
</main>
<?require_once $_SERVER['DOCUMENT_ROOT']."/views/footer.php";?>
