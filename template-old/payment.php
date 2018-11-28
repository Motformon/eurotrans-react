<?php
require_once 'vendor/autoload.php';
use YandexCheckout\Client;
$client = new Client();
$client->setAuth('540117', 'test_LeWyDquVnaYOPQc9bPD6VYeabc3cbo-35XcJf_DnK3k');

//if (isset($_GET['id_tikets'])&& !(empty($_GET['id_tikets'])))
//{
    require_once "payments/get_transaction_id.php";

    $payment = $client->getPaymentInfo($transaction_arr['transaction_id']);
    require_once "payments/set_payment_status.php";

    //////////////////////////////////--запись в erp по сооветствующему id_tikets статуса оплачен--////////////////////////////
    if ($payment->status == 'succeeded') $paymentMessage = 'Ваш платеж получен. Ваш билет отправлен Вам на почту.';
//    //////////////////////////////////--end --////////////////////////////
//}
?>
<?require_once $_SERVER['DOCUMENT_ROOT']."/views/header.php";?>

<header class="main-header main-header_booking">
  <div class="main-header__top"><a class="logo main-header__logo" href="/"><img class="logo__image" src="img/logo.png"></a>
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item text text_regular">Выбор</li>
      <li class="breadcrumbs__item text text_regular">Оформление</li>
      <li class="breadcrumbs__item breadcrumbs__item_active text text_regular">Оплата</li>
    </ul>
  </div>
</header>
<main class="page__main">

  <section class="execution" id="app">
    <h1 class="execution__title execution__title_main text text_regular">
        <?=$paymentMessage?>
    </h1>
  </section>

</main>

<?require_once $_SERVER['DOCUMENT_ROOT']."/views/formation/footer.php";?>

