<?php
/**
 * Created by PhpStorm.
 * User: 45-parallel.org
 * Date: 04.10.2018
 * Time: 12:31
 */

//echo '<pre>';print_r($arPostData);echo '</pre>';
if ($_GET['id_tikets'])
{
    $id_payment = $_GET['id_tikets'];
    require_once "/home/etrans/test_erp_evrotrans.net/erp.evrotrans.net/test_new_passenger.php";


// echo '<pre>';print_r($fields);echo '</pre>';

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
//    $curl = curl_init();
//
//    curl_setopt_array($curl,
//        array
//        (
//            CURLOPT_URL => "https://testerp.evrotrans.net/payments/get_transaction_id.php?id=".$id_tikets,
//            CURLOPT_RETURNTRANSFER => true,
//            CURLOPT_ENCODING => "",
//            CURLOPT_MAXREDIRS => 10,
//            CURLOPT_TIMEOUT => 30,
//            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//            CURLOPT_HTTPHEADER => prepare_headers(),
//        )
//    );
//
//    $response = curl_exec($curl);
//
//    $err = curl_error($curl);
//
//    curl_close($curl);
//
//    $id_payments = $response;
}
