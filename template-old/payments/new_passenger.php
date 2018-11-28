<?php
session_start();

include("inc/conf.inc.php");
require("inc/functions.inc.php");

#Устанавливаем свзь с базой данных
if(($lnk=db_connect($cfg["db_host"],$cfg["db_user"],$cfg["db_pass"],$cfg["db_db"]))===false) exit;
mysql_query("SET NAMES 'utf8';");
mysql_query("SET CHARACTER SET 'utf8';");
mysql_query("SET SESSION collation_connection = 'utf8_general_ci';");
$auth_messg="";


date_default_timezone_set("Europe/Moscow");
$date_now=date("Y-m-d");
$tomorrow=date("Y-m-d", strtotime("tomorrow"));
$esterday=date("Y-m-d", strtotime("-1 day"));


$vedomost_id=htmlspecialchars($arTest['vedomost_id']);// то что было в поле id при поиске рейса

$data_b=date_format(new DateTime(htmlspecialchars($arTest['data_b'])), 'Y-m-d'); //Дата рождения

$doc_type=htmlspecialchars($arTest['doc_type']);//Тип документа из списка от минтранс

$type_seat=htmlspecialchars($arTest['type_seat']);// пока не передаем (тип места первый этаж-1, второй этаж-2, лежа-3, в кабине-4, экипаж-5 )

$seat=htmlspecialchars($arTest['seat']); // не передаем номер места

$document_n=htmlspecialchars($arTest['document_n']); // номер документа нужно порверять по требованиям минтранса

$f=htmlspecialchars($arTest['f']); // Фамилия

$im=htmlspecialchars($arTest['i']);// Имя

$o=htmlspecialchars($arTest['o']);// Отчество  При отсутствии отчества необходимо указать значение «NA»

$email=htmlspecialchars($arTest['email']);// Email  пассажира

$gender=htmlspecialchars($arTest['gender']);	//пол

$info=htmlspecialchars($arTest['info']);// поле для дополнительной информации (коментарий пользователя)

$payment_status=0; //htmlspecialchars($_POST['payment_status']); // статус оплаты 1-оплаченно 0-не оплаченно

$to=htmlspecialchars($arTest['to']); // куда
$from=htmlspecialchars($arTest['from']); // откуда
$price=htmlspecialchars($arTest['price']); // цена билета

$oksm=htmlspecialchars($arTest['oksm']);//Гражданство указывается согласно справочника ОКСМ

$telephone=htmlspecialchars($arTest['telephone']);// контактный телефон

 mysql_query("INSERT INTO `transaction` (`id`, `status`, `amount`, `date_created`, `date_changed`, `transaction_id`, `count_adult`, `count_children`, `count_baby`, `data`) VALUES (NULL, 'в обработке', '".$price."', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, NULL, NULL, NULL, '');") or mysql_error();	
$transactions= mysql_insert_id(); 

   $max_seat = 64; 
   $i = 0; 
   while (++$i <= $max_seat)
   {
      $sql_t="SELECT * FROM `passengers` WHERE vedomost_id=".$vedomost_id." AND type_seat=2 AND seat=".$i." ;";
      $passenger_query_t=mysql_query ($sql_t) or die(mysql_error());
      $passengers_arr_t=mysql_fetch_array($passenger_query_t);

      if(mysql_num_rows($passenger_query_t)>0) continue; 
      //echo $i . '<br />'; 
      $operation_time=date("H:i:s");
  mysql_query("INSERT INTO `passengers` (`id`, `seat`, `type_seat`, `f`, `i`, `o`, `data_b`, `gender`, `doc_type`, `doc_info`, `vedomost_id`, `istochnik`, `info`, `telephone`, `sale_data`, `payment_status`, `id_ticket`, `oksm`, `manager`, `price`, `t_to`, `t_from`, `operation_time`, `email`, `transactions` ) VALUES 
		(NULL, '".$i."', '2', '".$f."', '".$im."', '".$o."', '".$data_b."', '".$gender."', '".$doc_type."', '".$document_n."', '".$vedomost_id."', '1', '".$info."', '".$telephone."', '".$date_now."', '".$payment_status."', '".$id_ticket."', '".$oksm."', '0', '".$price."', '".$to."', '".$from."', '".$operation_time."', '".$email."', '".$transactions."' );") or mysql_error();	
#echo mysql_insert_id();	 

echo $transactions;


 break;

	}


?>
