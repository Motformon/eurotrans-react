<?php
/**
 * Created by PhpStorm.
 * User: 45-parallel.org
 * Date: 21.09.2018
 * Time: 15:45
 */
//echo '<pre>';print_r($_POST);echo '</pre>';

$arPostData = array();
$index = 0;
//echo '<pre>';print_r($_POST);echo '</pre>';
unset($_POST['emailUserConfirm']);
foreach ($_POST as $key => $prop)
{
    if ($prop != 'border')
    {
        if ($prop == 'border') $index++;  else $arPostData[$index][] = $prop;
    }
}
//echo '<pre>';print_r($arPostData);echo '</pre>';
        function prepare_fields($arPostData)
        {
            $fields = array();
                foreach ($arPostData as $key => $prop)
                {
                    $fields['vedomost_id'] = $prop[10];
                    $fields['data_b'] = $prop[3];
//                    $fields['doc_type'] = $prop[6];
                    $fields['doc_type'] = 0;
                    $fields['email'] = $prop[8];
                    $fields['document_n'] = $prop[7];
                    $fields['type_seat'] = 2;
                    $fields['seat'] = 2;
                    $fields['f'] = $prop[0];
                    $fields['i'] = $prop[1];
                    $fields['o'] = $prop[2];
                    $fields['gender'] = $prop[4];
                    $fields['info'] = 'test';
                    $fields['to'] = $prop[11];
                    $fields['from'] = $prop[12];
                    $fields['price'] = $prop[13];
                    $fields['oksm'] = 643;
//                    $fields['oksm'] = $prop[5];
                    $fields['telephone'] = $prop[9];
                }
            return $fields;
        }
        $arTest = prepare_fields($arPostData);
//echo '<pre>';print_r($arTest);echo '</pre>';
require_once "payments/new_passenger.php";

//    $fields = http_build_query($arTest);
//    //$fields = array("post1"=>"fjdk");
////    echo '<pre>';print_r($fields);echo '</pre>';
//
//    if (!(function_exists(prepare_headers)))
//    {
//        function prepare_headers()
//        {
//            $headers = [];
//            $headers[] = 'Content-type:  text/html; charset=utf-8';
//            $headers[] = 'Accept: text/html';
//            return $headers;
//        }
//    }
//
//        $curl = curl_init();
//
//        curl_setopt_array($curl,
//            array
//            (
//                CURLOPT_URL => "https://testerp.evrotrans.net/new_passenger.php",
////              CURLOPT_URL => "http://med.alberys.ru/new_pass.php",
//                CURLOPT_RETURNTRANSFER => true,
//                CURLOPT_POST => true,
//                CURLOPT_POSTFIELDS => $fields,
//                CURLOPT_RETURNTRANSFER => 1,
////              CURLOPT_ENCODING => "",
////              CURLOPT_MAXREDIRS => 10,
//                CURLOPT_TIMEOUT => 30,
////              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//                CURLOPT_HTTPHEADER => prepare_headers(),
//            )
//        );
//
//        $response = curl_exec($curl);
//
//        $err = curl_error($curl);
//
////echo '<pre>';print_r(curl_getinfo($curl));echo '</pre>';
//
//        curl_close($curl);
//
//        $response = $response;
//
//        $id_tikets = $response;