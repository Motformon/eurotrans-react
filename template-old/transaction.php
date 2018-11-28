<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once 'utils/record_tikets.php';
//echo '<pre>';print_r($transactions);echo '</pre>';
    use YandexCheckout\Client;

    $client = new Client();
    $client->setAuth('540117', 'test_LeWyDquVnaYOPQc9bPD6VYeabc3cbo-35XcJf_DnK3k');
    $payment = $client->createPayment(
        array(
            'amount' => array(
                'value' => $arTest['price'],
                'currency' => 'RUB',
            ),
//            'receipt' => array(
//                'email' => '.$arTest['email'].',
//                'items' => array(
//                    'description' => 'билет '.$arTest['from'].'-'.$arTest['from'],
//                );
//            ),
            'capture' => true,
            'confirmation' => array(
                'type' => 'redirect',
                'return_url' => 'https://evrotrans.net/payment.php?id_tikets='.$transactions,
            ),
            'description' => 'Заказ №'.$transactions,
        ),
        uniqid('', true)
    );
//////////////////////////////////--запишем в erp номер билета и соответсвующий номер платежа--////////////////////////////
   require_once "payments/set_payment_id.php";
////////////////////////////////--end --////////////////////////////
//echo '<pre>';var_dump($payment);echo '</pre>';
    if (isset($payment->confirmation->confirmation_url)) {
        header("Location: " . $payment->confirmation->confirmation_url);
    }


?>

<?require_once $_SERVER['DOCUMENT_ROOT']."/views/header.php";?>
<main class="page__main">

</main>
<?require_once $_SERVER['DOCUMENT_ROOT']."/views/footer.php";?>

