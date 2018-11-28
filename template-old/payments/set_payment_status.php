<?php

//$id_payment=htmlspecialchars($_REQUEST['id']);// id Платежа в нашей базе
//$status=htmlspecialchars($_REQUEST['status']);// статус платежа от яндекса
$id_payment = $_REQUEST['id_tikets'];
$status = $payment->status;
//$status = 'succeeded';


mysql_query("UPDATE `transaction` SET `status` = '".$status."', `date_changed` = CURRENT_TIMESTAMP WHERE `transaction`.`id` = ".$id_payment.";") or mysql_error();	



?>
