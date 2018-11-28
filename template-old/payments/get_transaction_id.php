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

$id_payment=htmlspecialchars($_REQUEST['id_tikets']);// id Платежа в нашей базе

$transaction_query=mysql_query("SELECT * FROM `transaction` WHERE `id` = ".$id_payment." ;") or mysql_error();
$transaction_arr=mysql_fetch_array($transaction_query);


?>
