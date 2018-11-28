<?php
/**
 * Created by PhpStorm.
 * User: Тарас
 * Date: 05.10.2018
 * Time: 19:01
 */
$to = "comment@evrotrans.net";
$order = "Заявка " . date('Y-m-d\ H:i:s');
$sitename  = "https://evrotrans.net";
$subject   = " \"$sitename\" $order";
$headers = 'From: post@evrotrans.net' . "\r\n" .
    'Content-Type: text/html;charset=UTF-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];
$message = "
Имя:  ".$name."<br><br>
Телефон: ".$phone."<br><br> 
Почта: ".$email."<br><br> 
Текст сообщения: ".$text."<br><br> 
";

//return mail($to, $subject, $message, $headers);
if( mail($to, $subject, $message, $headers) )
{
    echo true;
}
else
{
    echo false;
}
?>