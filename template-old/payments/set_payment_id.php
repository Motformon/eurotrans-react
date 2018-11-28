<?php

$id_payment = $transactions;
$kassa_payment = $payment->id;


mysql_query("UPDATE `transaction` SET `date_changed` = CURRENT_TIMESTAMP, `transaction_id` = '".$kassa_payment."' WHERE `transaction`.`id` = ".$id_payment.";") or mysql_error();



?>
